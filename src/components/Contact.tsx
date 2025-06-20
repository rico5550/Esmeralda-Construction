import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import axios from 'axios';

const Contact = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    timeline: '',
    budget: '',
    projectDetails: '',
    address: ''
  });

  const services = [
    { id: 'custom-residential', label: 'Custom Residential', description: 'Luxury home construction' },
    { id: 'commercial', label: 'Commercial Construction', description: 'Office & retail spaces' },
    { id: 'renovation', label: 'Renovation & Remodeling', description: 'Transform existing spaces' },
    { id: 'additions', label: 'Home Additions', description: 'Expand your living space' },
    { id: 'outdoor-living', label: 'Outdoor Living Spaces', description: 'Pools, patios & gardens' },
    { id: 'emergency', label: 'Emergency Services', description: '24/7 urgent repairs' },
    { id: 'consulting', label: 'Design Consulting', description: 'Expert project planning' },
    { id: 'permits', label: 'Permits & Planning', description: 'Regulatory compliance' }
  ];

  const timelineOptions = [
    'ASAP - Emergency',
    'Within 1 month',
    '1-3 months',
    '3-6 months',
    '6+ months',
    'Planning phase'
  ];

  const budgetRanges = [
    'Under $50K',
    '$50K - $100K',
    '$100K - $250K',
    '$250K - $500K',
    '$500K - $1M',
    '$1M+'
  ];

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || selectedServices.length === 0) {
      alert('Please fill in all required fields and select at least one service.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Get selected service names
      const selectedServiceNames = selectedServices.map(serviceId =>
        services.find(service => service.id === serviceId)?.label
      ).filter(Boolean).join(', ');

      // Create HTML email content
      const htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8f9fa; padding: 20px;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            
            <h1 style="color: #ea5f00; text-align: center; margin-bottom: 30px; font-size: 28px;">
              🏗️ New Quote Request - Esmeralda Construction
            </h1>
            
            <div style="background-color: #ea5f00; color: white; padding: 15px; border-radius: 5px; margin-bottom: 25px;">
              <h2 style="margin: 0; font-size: 20px;">Hello!</h2>
              <p style="margin: 10px 0 0 0; font-size: 16px;">A new potential client, <strong>${formData.firstName} ${formData.lastName}</strong>, is requesting a comprehensive quote for construction services.</p>
            </div>

            <div style="margin-bottom: 25px;">
              <h3 style="color: #333; border-bottom: 2px solid #ea5f00; padding-bottom: 10px; margin-bottom: 15px;">📋 Client Information</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px 0; font-weight: bold; color: #555; width: 30%;">Name:</td><td style="padding: 8px 0; color: #333;">${formData.firstName} ${formData.lastName}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td><td style="padding: 8px 0; color: #333;"><a href="mailto:${formData.email}" style="color: #ea5f00; text-decoration: none;">${formData.email}</a></td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Phone:</td><td style="padding: 8px 0; color: #333;"><a href="tel:${formData.phone}" style="color: #ea5f00; text-decoration: none;">${formData.phone}</a></td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Company:</td><td style="padding: 8px 0; color: #333;">${formData.company || 'Not specified'}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Project Location:</td><td style="padding: 8px 0; color: #333;">${formData.address || 'Not specified'}</td></tr>
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
                <tr><td style="padding: 8px 0; font-weight: bold; color: #555; width: 30%;">Timeline:</td><td style="padding: 8px 0; color: #333;">${formData.timeline || 'Not specified'}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Budget Range:</td><td style="padding: 8px 0; color: #333;">${formData.budget || 'Not specified'}</td></tr>
              </table>
              
              ${formData.projectDetails ? `
                <div style="margin-top: 15px;">
                  <p style="font-weight: bold; color: #555; margin-bottom: 8px;">Project Details:</p>
                  <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #ea5f00;">
                    <p style="margin: 0; color: #333; line-height: 1.6;">${formData.projectDetails}</p>
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

      // Brevo API configuration - Custom HTML approach for full control
      const senderEmail = import.meta.env.VITE_BREVO_SENDER_EMAIL || "noreply@esmeraldaconstruction.com";

      // Quote request email to YOU (the business)
      const brevoData = {
        sender: {
          name: "Esmeralda Construction Website",
          email: senderEmail
        },
        to: [
          {
            email: "ricosteven00@gmail.com", // YOUR business email
            name: "Esmeralda Construction"
          }
        ],
        subject: `🏗️ New Quote Request from ${formData.firstName} ${formData.lastName}`,
        htmlContent: htmlContent,
        textContent: `
New Quote Request - Esmeralda Construction

Client: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company || 'Not specified'}
Project Location: ${formData.address || 'Not specified'}

Services Requested: ${selectedServiceNames}
Timeline: ${formData.timeline || 'Not specified'}
Budget Range: ${formData.budget || 'Not specified'}

Project Details:
${formData.projectDetails || 'No additional details provided'}

Please respond within 4 hours as promised on the website.
        `
      };

      // Debug: Check if API key is loaded
      const apiKey = import.meta.env.VITE_BREVO_API_KEY;
      console.log('Brevo API Key present:', apiKey ? 'Yes' : 'No');
      console.log('API Key starts with:', apiKey ? apiKey.substring(0, 10) + '...' : 'Not found');
      console.log('Brevo request payload:', brevoData);

      if (!apiKey || apiKey === 'YOUR_BREVO_API_KEY_HERE') {
        alert('Brevo API key not configured. Please set up your .env.local file with VITE_BREVO_API_KEY');
        throw new Error('API key not configured');
      }

      // Send email via Brevo API
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

      console.log('Quote request email sent successfully to business:', result.data);

      // Send thank you/confirmation email to the CUSTOMER using Brevo template
      const templateId = import.meta.env.VITE_BREVO_TEMPLATE_ID;

      const customerThankYouEmail = templateId ? {
        // Use your Brevo template
        to: [
          {
            email: formData.email, // Send to the customer who filled out the form
            name: `${formData.firstName} ${formData.lastName}`
          }
        ],
        templateId: parseInt(templateId),
        params: {
          // Template variables - matching your template setup
          FIRSTNAME: formData.firstName,
          LASTNAME: formData.lastName
        }
      } : {
        // Fallback to custom HTML if no template ID
        sender: {
          name: "Esmeralda Construction",
          email: senderEmail
        },
        to: [
          {
            email: formData.email,
            name: `${formData.firstName} ${formData.lastName}`
          }
        ],
        subject: "Thank you for requesting a quote",
        htmlContent: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 40px 20px;">
            <!-- Simple fallback content -->
            <h1 style="color: #1e5532;">ESMERALDA CONSTRUCTION</h1>
            <p>Hi ${formData.firstName},</p>
            <p>Thank you for reaching out to us with your project details. We've received your request and will review it as soon as possible.</p>
            <p>A member of our team will get back to you shortly to discuss your vision and next steps.</p>
            <p>Best regards,<br>Esmeralda Construction<br>(555) 123-4567</p>
          </div>
        `
      };

      console.log('Sending thank you email to customer:', customerThankYouEmail);

      // Send the thank you email
      const thankYouResult = await axios.post(
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

      console.log('Thank you email sent successfully:', thankYouResult.data);
      setSubmitStatus('success');

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        timeline: '',
        budget: '',
        projectDetails: '',
        address: ''
      });
      setSelectedServices([]);

    } catch (error) {
      console.error('Error sending email via Brevo:', error);
      // Show more detailed error info for debugging
      if (axios.isAxiosError(error)) {
        console.error('Axios error details:', {
          message: error.message,
          status: error.response?.status,
          statusText: error.response?.statusText,
          data: error.response?.data,
          headers: error.response?.headers
        });
        console.error('Full error response:', error.response);
        // Show the actual error message from Brevo
        const errorMessage = error.response?.data?.message || error.response?.statusText || error.message;
        const errorCode = error.response?.data?.code || 'Unknown';
        alert(`Brevo Error: ${errorMessage} (Code: ${errorCode})`);
      } else {
        alert(`Error: ${error}`);
      }
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative bg-cream overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream to-card"></div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23b37d47' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10 py-16">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-6xl font-medium text-olive mb-4">
              Let's <em className="text-energy">Create</em> Something Extraordinary
            </h2>
            <p className="text-xl lg:text-2xl text-text font-medium max-w-3xl mx-auto leading-relaxed">
              Transform your vision into reality with our expert craftsmanship and unparalleled attention to detail.
            </p>
            <div className="w-20 h-0.5 bg-olive mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="xl:col-span-1 space-y-6">
              <div>
                <h3 className="text-2xl font-medium text-olive mb-6">Connect With Us</h3>

                <div className="space-y-4">
                  <div className="group">
                    <div className="flex items-start space-x-3">
                      <div className="bg-gradient-to-br from-olive to-olive-dark p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <Phone size={20} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-olive text-xl mb-1">Direct Line</h4>
                        <p className="text-text text-lg mb-1">(555) 123-4567</p>
                        <p className="text-text/70 text-base"></p>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <div className="flex items-start space-x-3">
                      <div className="bg-gradient-to-br from-olive to-olive-dark p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <Mail size={20} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-olive text-xl mb-1">Email</h4>
                        <p className="text-text text-lg mb-1">info@esmeraldaconstruction.com</p>
                        <p className="text-text/70 text-base"></p>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <div className="flex items-start space-x-3">
                      <div className="bg-gradient-to-br from-olive to-olive-dark p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <MapPin size={20} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-olive text-xl mb-1">Service Area</h4>
                        <p className="text-text text-lg mb-1">Greater Metro Area</p>
                        <p className="text-text/70 text-base">Licensed • Insured • Bonded</p>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <div className="flex items-start space-x-3">
                      <div className="bg-gradient-to-br from-olive to-olive-dark p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <Clock size={20} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-olive text-xl mb-1">Business Hours</h4>
                        <p className="text-text text-lg">Mon-Fri: 7AM-6PM</p>
                        <p className="text-text text-lg">Sat: 8AM-4PM</p>
                        <p className="text-text/70 text-base">Sun: Emergency only</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote Request Form */}
            <div className="xl:col-span-2">
              <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-olive/30">
                <h3 className="text-2xl font-medium text-olive mb-6">Request Your Custom Quote</h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-text mb-1">First Name*</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 rounded-lg bg-white/80 border border-olive/30 focus:border-olive focus:ring-1 focus:ring-olive/50 outline-none transition-all text-text placeholder-text/60 text-base"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text mb-1">Last Name*</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 rounded-lg bg-white/80 border border-olive/30 focus:border-olive focus:ring-1 focus:ring-olive/50 outline-none transition-all text-text placeholder-text/60 text-base"
                        placeholder="Doe"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text mb-1">Phone*</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 rounded-lg bg-white/80 border border-olive/30 focus:border-olive focus:ring-1 focus:ring-olive/50 outline-none transition-all text-text placeholder-text/60 text-base"
                        placeholder="(555) 123-4567"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-text mb-1">Email*</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 rounded-lg bg-white/80 border border-olive/30 focus:border-olive focus:ring-1 focus:ring-olive/50 outline-none transition-all text-text placeholder-text/60 text-base"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text mb-1">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 rounded-lg bg-white/80 border border-olive/30 focus:border-olive focus:ring-1 focus:ring-olive/50 outline-none transition-all text-text placeholder-text/60 text-base"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text mb-1">Project Address</label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 rounded-lg bg-white/80 border border-olive/30 focus:border-olive focus:ring-1 focus:ring-olive/50 outline-none transition-all text-text placeholder-text/60 text-base"
                        placeholder="Project location"
                      />
                    </div>
                  </div>

                  {/* Services Selection */}
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">Services Needed*</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {services.map((service) => (
                        <div
                          key={service.id}
                          className={`relative cursor-pointer p-2 rounded-lg border transition-all duration-200 hover:scale-105 ${selectedServices.includes(service.id)
                            ? 'border-olive bg-olive/10'
                            : 'border-olive/30 bg-white/40 hover:border-olive/50'
                            }`}
                          onClick={() => handleServiceToggle(service.id)}
                        >
                          <div className="flex items-center space-x-2">
                            <div className={`transition-all duration-300 ${selectedServices.includes(service.id) ? 'text-olive' : 'text-text/60'
                              }`}>
                              <CheckCircle size={14} />
                            </div>
                            <div>
                              <h4 className="font-medium text-text text-sm leading-tight">{service.label}</h4>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Timeline and Budget */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-text mb-1">Timeline</label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 rounded-lg bg-white/80 border border-olive/30 focus:border-olive focus:ring-1 focus:ring-olive/50 outline-none transition-all text-text text-base"
                      >
                        <option value="" className="bg-white">Select timeline</option>
                        {timelineOptions.map((option) => (
                          <option key={option} value={option} className="bg-white">{option}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text mb-1">Budget Range</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 rounded-lg bg-white/80 border border-olive/30 focus:border-olive focus:ring-1 focus:ring-olive/50 outline-none transition-all text-text text-base"
                      >
                        <option value="" className="bg-white">Select budget range</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range} className="bg-white">{range}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-sm font-medium text-text mb-1">Project Details</label>
                    <textarea
                      name="projectDetails"
                      value={formData.projectDetails}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-3 py-2 rounded-lg bg-white/80 border border-olive/30 focus:border-olive focus:ring-1 focus:ring-olive/50 outline-none transition-all resize-none text-text placeholder-text/60 text-base"
                      placeholder="Share your vision, specific requirements, design preferences, or any questions..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 text-lg shadow-lg ${isSubmitting
                      ? 'bg-text/60 cursor-not-allowed'
                      : submitStatus === 'success'
                        ? 'bg-green-600 hover:bg-green-700'
                        : submitStatus === 'error'
                          ? 'bg-red-600 hover:bg-red-700'
                          : 'bg-gradient-to-r from-olive to-olive-dark hover:from-olive-dark hover:to-olive hover:shadow-olive/25 hover:scale-105'
                      } text-white`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-stone-900"></div>
                        <span>Sending...</span>
                      </>
                    ) : submitStatus === 'success' ? (
                      <>
                        <CheckCircle size={16} />
                        <span>Quote Request Sent!</span>
                      </>
                    ) : submitStatus === 'error' ? (
                      <>
                        <Send size={16} />
                        <span>Try Again</span>
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Send Quote Request</span>
                      </>
                    )}
                  </button>

                  {submitStatus === 'success' && (
                    <p className="text-green-600 text-sm text-center font-medium">
                      ✅ Your quote request has been sent successfully!
                    </p>
                  )}

                  {submitStatus === 'error' && (
                    <p className="text-red-600 text-sm text-center font-medium">
                      ❌ There was an error sending your request. Please try again or call us directly.
                    </p>
                  )}


                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;