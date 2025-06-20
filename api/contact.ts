import type { VercelRequest, VercelResponse } from '@vercel/node';

interface ContactFormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    company?: string;
    timeline?: string;
    budget?: string;
    projectDetails?: string;
    address?: string;
    selectedServices: string[];
    honeypot?: string;
    recaptchaToken?: string;
}

// Simple in-memory rate limiting store
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// Rate limiting function
function checkRateLimit(ip: string): { allowed: boolean; resetTime?: number } {
    const now = Date.now();
    const windowMs = 15 * 60 * 1000; // 15 minutes
    const maxRequests = 5; // 5 requests per 15 minutes

    const key = ip;
    const record = rateLimitStore.get(key);

    if (!record || now > record.resetTime) {
        // New window or expired
        rateLimitStore.set(key, { count: 1, resetTime: now + windowMs });
        return { allowed: true };
    }

    if (record.count >= maxRequests) {
        return { allowed: false, resetTime: record.resetTime };
    }

    record.count++;
    return { allowed: true };
}

// Basic input sanitization
function sanitizeInput(input: string): string {
    return input
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove script tags
        .replace(/<[^>]*>/g, '') // Remove HTML tags
        .trim();
}

// Email validation
function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Phone validation (basic US format)
function isValidPhone(phone: string): boolean {
    const phoneRegex = /^[\+]?[\s\-\(\)]?[\d\s\-\(\)]{10,}$/;
    return phoneRegex.test(phone);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        // Get client IP for rate limiting
        const clientIp = req.headers['x-forwarded-for'] as string ||
            req.headers['x-real-ip'] as string ||
            req.connection?.remoteAddress ||
            'unknown';

        // Check rate limit
        const rateCheck = checkRateLimit(clientIp);
        if (!rateCheck.allowed) {
            const resetTime = new Date(rateCheck.resetTime!).toLocaleTimeString();
            return res.status(429).json({
                error: `Too many requests. Please try again after ${resetTime}`
            });
        }

        const {
            firstName,
            lastName,
            email,
            phone,
            company = '',
            timeline = '',
            budget = '',
            projectDetails = '',
            address = '',
            selectedServices,
            honeypot = '',
            recaptchaToken = ''
        }: ContactFormData = req.body;

        // Honeypot check - if filled, it's likely a bot
        if (honeypot && honeypot.trim() !== '') {
            console.log('🔒 Security Alert - Honeypot triggered:', {
                ip: clientIp,
                honeypot: honeypot.substring(0, 50), // Limit logging
                userAgent: req.headers['user-agent'],
                timestamp: new Date().toISOString()
            });
            // Return success to not alert the bot, but don't send email
            return res.status(200).json({
                success: true,
                message: 'Quote request submitted successfully'
            });
        }

        // reCAPTCHA verification
        if (recaptchaToken) {
            const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
            if (recaptchaSecret) {
                try {
                    const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        body: `secret=${recaptchaSecret}&response=${recaptchaToken}&remoteip=${clientIp}`
                    });

                    const recaptchaData = await recaptchaResponse.json();

                    if (!recaptchaData.success || recaptchaData.score < 0.5) {
                        console.log('🔒 Security Alert - reCAPTCHA failed:', {
                            ip: clientIp,
                            score: recaptchaData.score,
                            errors: recaptchaData['error-codes'],
                            userAgent: req.headers['user-agent'],
                            timestamp: new Date().toISOString()
                        });
                        // Return generic error
                        return res.status(400).json({
                            error: 'Security validation failed. Please try again.'
                        });
                    }

                    console.log('✅ reCAPTCHA passed:', {
                        score: recaptchaData.score,
                        ip: clientIp,
                        timestamp: new Date().toISOString()
                    });
                } catch (error) {
                    console.error('reCAPTCHA verification error:', error);
                    // Continue without blocking if reCAPTCHA service fails
                }
            }
        }

        // Validation
        if (!firstName || !lastName || !email || !phone || !selectedServices?.length) {
            return res.status(400).json({
                error: 'Missing required fields: firstName, lastName, email, phone, and at least one service'
            });
        }

        // Sanitize inputs
        const cleanData = {
            firstName: sanitizeInput(firstName),
            lastName: sanitizeInput(lastName),
            email: sanitizeInput(email),
            phone: sanitizeInput(phone),
            company: sanitizeInput(company),
            timeline: sanitizeInput(timeline),
            budget: sanitizeInput(budget),
            projectDetails: sanitizeInput(projectDetails),
            address: sanitizeInput(address),
            selectedServices: selectedServices.map(service => sanitizeInput(service))
        };

        // Validate email and phone
        if (!isValidEmail(cleanData.email)) {
            return res.status(400).json({ error: 'Invalid email format' });
        }

        if (!isValidPhone(cleanData.phone)) {
            return res.status(400).json({ error: 'Invalid phone format' });
        }

        // Get environment variables (server-side, secure)
        const apiKey = process.env.BREVO_API_KEY;
        const senderEmail = process.env.BREVO_SENDER_EMAIL || "noreply@esmeraldaconstruction.com";
        const templateId = process.env.BREVO_TEMPLATE_ID;

        if (!apiKey) {
            console.error('BREVO_API_KEY not configured');
            return res.status(500).json({ error: 'Server configuration error' });
        }

        // Service mapping (same as frontend)
        const serviceMap: { [key: string]: string } = {
            'custom-residential': 'Custom Residential',
            'commercial': 'Commercial Construction',
            'renovation': 'Renovation & Remodeling',
            'additions': 'Home Additions',
            'outdoor-living': 'Outdoor Living Spaces',
            'emergency': 'Emergency Services',
            'consulting': 'Design Consulting',
            'permits': 'Permits & Planning'
        };

        const selectedServiceNames = cleanData.selectedServices
            .map(serviceId => serviceMap[serviceId] || serviceId)
            .join(', ');

        // Create HTML email content
        const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8f9fa; padding: 20px;">
        <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          
          <h1 style="color: #ea5f00; text-align: center; margin-bottom: 30px; font-size: 28px;">
            🏗️ New Quote Request - Esmeralda Construction
          </h1>
          
          <div style="background-color: #ea5f00; color: white; padding: 15px; border-radius: 5px; margin-bottom: 25px;">
            <h2 style="margin: 0; font-size: 20px;">Hello!</h2>
            <p style="margin: 10px 0 0 0; font-size: 16px;">A new potential client, <strong>${cleanData.firstName} ${cleanData.lastName}</strong>, is requesting a comprehensive quote for construction services.</p>
          </div>

          <div style="margin-bottom: 25px;">
            <h3 style="color: #333; border-bottom: 2px solid #ea5f00; padding-bottom: 10px; margin-bottom: 15px;">📋 Client Information</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; font-weight: bold; color: #555; width: 30%;">Name:</td><td style="padding: 8px 0; color: #333;">${cleanData.firstName} ${cleanData.lastName}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td><td style="padding: 8px 0; color: #333;"><a href="mailto:${cleanData.email}" style="color: #ea5f00; text-decoration: none;">${cleanData.email}</a></td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Phone:</td><td style="padding: 8px 0; color: #333;"><a href="tel:${cleanData.phone}" style="color: #ea5f00; text-decoration: none;">${cleanData.phone}</a></td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Company:</td><td style="padding: 8px 0; color: #333;">${cleanData.company || 'Not specified'}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Project Location:</td><td style="padding: 8px 0; color: #333;">${cleanData.address || 'Not specified'}</td></tr>
            </table>
          </div>

          <div style="margin-bottom: 25px;">
            <h3 style="color: #333; border-bottom: 2px solid #ea5f00; padding-bottom: 10px; margin-bottom: 15px;">🔧 Services Requested</h3>
            <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #ea5f00;">
              <p style="margin: 0; font-size: 16px; color: #333; font-weight: 500;">${selectedServiceNames}</p>
            </div>
          </div>

          <div style="margin-bottom: 25px;">
            <h3 style="color: #333; border-bottom: 2px solid #ea5f00; padding-bottom: 10px; margin-bottom: 15px;">📊 Project Specifications</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; font-weight: bold; color: #555; width: 30%;">Timeline:</td><td style="padding: 8px 0; color: #333;">${cleanData.timeline || 'Not specified'}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Budget Range:</td><td style="padding: 8px 0; color: #333;">${cleanData.budget || 'Not specified'}</td></tr>
            </table>
            
            ${cleanData.projectDetails ? `
              <div style="margin-top: 15px;">
                <p style="font-weight: bold; color: #555; margin-bottom: 8px;">Project Details:</p>
                <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #ea5f00;">
                  <p style="margin: 0; color: #333; line-height: 1.6;">${cleanData.projectDetails}</p>
                </div>
              </div>
            ` : ''}
          </div>

          <div style="background-color: #28a745; color: white; padding: 20px; border-radius: 5px; text-align: center;">
            <h3 style="margin: 0 0 10px 0; font-size: 18px;">📞 Next Steps</h3>
            <p style="margin: 0; font-size: 14px; line-height: 1.6;">
              Please respond to this client within 4 hours as promised on the website.<br>
              Recommend scheduling a consultation call to discuss their vision in detail.<br><br>
              <em>This lead was generated from the Esmeralda Construction website contact form.</em>
            </p>
          </div>

        </div>
      </div>
    `;

        // Send business notification email
        const axios = (await import('axios')).default;

        const brevoData = {
            sender: {
                name: "Esmeralda Construction Website",
                email: senderEmail
            },
            to: [
                {
                    email: "ricosteven00@gmail.com",
                    name: "Esmeralda Construction"
                }
            ],
            subject: `🏗️ New Quote Request from ${cleanData.firstName} ${cleanData.lastName}`,
            htmlContent: htmlContent,
            textContent: `
New Quote Request - Esmeralda Construction

Client: ${cleanData.firstName} ${cleanData.lastName}
Email: ${cleanData.email}
Phone: ${cleanData.phone}
Company: ${cleanData.company || 'Not specified'}
Project Location: ${cleanData.address || 'Not specified'}

Services Requested: ${selectedServiceNames}
Timeline: ${cleanData.timeline || 'Not specified'}
Budget Range: ${cleanData.budget || 'Not specified'}

Project Details:
${cleanData.projectDetails || 'No additional details provided'}

Please respond within 4 hours as promised on the website.
      `
        };

        const result = await axios.post(
            'https://api.brevo.com/v3/smtp/email',
            brevoData,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'api-key': apiKey
                }
            }
        );

        // Send customer thank you email
        const customerThankYouEmail = templateId ? {
            to: [
                {
                    email: cleanData.email,
                    name: `${cleanData.firstName} ${cleanData.lastName}`
                }
            ],
            templateId: parseInt(templateId),
            params: {
                FIRSTNAME: cleanData.firstName,
                LASTNAME: cleanData.lastName
            }
        } : {
            sender: {
                name: "Esmeralda Construction",
                email: senderEmail
            },
            to: [
                {
                    email: cleanData.email,
                    name: `${cleanData.firstName} ${cleanData.lastName}`
                }
            ],
            subject: "Thank you for requesting a quote",
            htmlContent: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 40px 20px;">
          <h1 style="color: #1e5532;">ESMERALDA CONSTRUCTION</h1>
          <p>Hi ${cleanData.firstName},</p>
          <p>Thank you for reaching out to us with your project details. We've received your request and will review it as soon as possible.</p>
          <p>A member of our team will get back to you shortly to discuss your vision and next steps.</p>
          <p>Best regards,<br>Esmeralda Construction<br>(555) 123-4567</p>
        </div>
      `
        };

        await axios.post(
            'https://api.brevo.com/v3/smtp/email',
            customerThankYouEmail,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'api-key': apiKey
                }
            }
        );

        res.status(200).json({
            success: true,
            message: 'Quote request submitted successfully'
        });

    } catch (error) {
        console.error('Contact form error:', error);
        res.status(500).json({
            error: 'Failed to submit quote request. Please try again.'
        });
    }
} 