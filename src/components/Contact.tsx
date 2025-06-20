import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import axios from 'axios';
import { monitoring, performanceMonitoring } from '../utils/monitoring';

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
    address: '',
    honeypot: '' // Hidden field for spam detection
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

    // Start performance tracking
    const startTime = performance.now();

    // Validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || selectedServices.length === 0) {
      alert('Please fill in all required fields and select at least one service.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Get reCAPTCHA token
      let recaptchaToken = '';
      if (typeof window !== 'undefined' && window.grecaptcha) {
        try {
          recaptchaToken = await window.grecaptcha.execute('6LcYour_Site_Key_Here', {
            action: 'contact_form'
          });
        } catch (error) {
          console.warn('reCAPTCHA failed:', error);
          // Continue without reCAPTCHA if it fails
        }
      }

      // Send form data to secure serverless function
      const response = await axios.post('/api/contact', {
        ...formData,
        selectedServices,
        recaptchaToken
      });

      if (response.data.success) {
        setSubmitStatus('success');

        // Track successful form submission
        performanceMonitoring.trackFormPerformance(startTime, true);
        monitoring.logFormSubmission({
          success: true,
          services: selectedServices,
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          processingTime: Math.round(performance.now() - startTime)
        });

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
          address: '',
          honeypot: ''
        });
        setSelectedServices([]);
      } else {
        throw new Error(response.data.error || 'Failed to submit form');
      }

    } catch (error) {
      console.error('Error submitting contact form:', error);

      // Track failed form submission
      performanceMonitoring.trackFormPerformance(startTime, false);
      monitoring.logFormSubmission({
        success: false,
        services: selectedServices,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        processingTime: Math.round(performance.now() - startTime),
        error: error instanceof Error ? error.message : String(error)
      });

      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.error || error.response?.statusText || error.message;
        alert(`Error: ${errorMessage}`);
      } else {
        alert(`Error: ${error}`);
      }
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative bg-cream overflow-hidden" aria-labelledby="contact-heading">
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
            <h2 id="contact-heading" className="text-4xl lg:text-6xl font-medium text-olive mb-4">
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
                      <label htmlFor="firstName" className="block text-sm font-medium text-text mb-1">First Name*</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 rounded-lg bg-white/80 border border-olive/30 focus:border-olive focus:ring-1 focus:ring-olive/50 outline-none transition-all text-text placeholder-text/60 text-base"
                        placeholder="John"
                        required
                        aria-describedby="firstName-desc"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-text mb-1">Last Name*</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 rounded-lg bg-white/80 border border-olive/30 focus:border-olive focus:ring-1 focus:ring-olive/50 outline-none transition-all text-text placeholder-text/60 text-base"
                        placeholder="Doe"
                        required
                        aria-describedby="lastName-desc"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-text mb-1">Phone*</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 rounded-lg bg-white/80 border border-olive/30 focus:border-olive focus:ring-1 focus:ring-olive/50 outline-none transition-all text-text placeholder-text/60 text-base"
                        placeholder="(555) 123-4567"
                        required
                        aria-describedby="phone-desc"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text mb-1">Email*</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 rounded-lg bg-white/80 border border-olive/30 focus:border-olive focus:ring-1 focus:ring-olive/50 outline-none transition-all text-text placeholder-text/60 text-base"
                        placeholder="john@example.com"
                        required
                        aria-describedby="email-desc"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-text mb-1">Company</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 rounded-lg bg-white/80 border border-olive/30 focus:border-olive focus:ring-1 focus:ring-olive/50 outline-none transition-all text-text placeholder-text/60 text-base"
                        placeholder="Your Company"
                        aria-describedby="company-desc"
                      />
                    </div>
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-text mb-1">Project Address</label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 rounded-lg bg-white/80 border border-olive/30 focus:border-olive focus:ring-1 focus:ring-olive/50 outline-none transition-all text-text placeholder-text/60 text-base"
                        placeholder="Project location"
                        aria-describedby="address-desc"
                      />
                    </div>
                  </div>

                  {/* Services Selection */}
                  <fieldset>
                    <legend className="block text-sm font-medium text-text mb-2">Services Needed*</legend>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2" role="group" aria-labelledby="services-legend">
                      {services.map((service) => (
                        <div
                          key={service.id}
                          className={`relative cursor-pointer p-2 rounded-lg border transition-all duration-200 hover:scale-105 ${selectedServices.includes(service.id)
                            ? 'border-olive bg-olive/10'
                            : 'border-olive/30 bg-white/40 hover:border-olive/50'
                            }`}
                          onClick={() => handleServiceToggle(service.id)}
                          role="checkbox"
                          aria-checked={selectedServices.includes(service.id)}
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === ' ' || e.key === 'Enter') {
                              e.preventDefault();
                              handleServiceToggle(service.id);
                            }
                          }}
                          aria-describedby={`${service.id}-desc`}
                        >
                          <div className="flex items-center space-x-2">
                            <div className={`transition-all duration-300 ${selectedServices.includes(service.id) ? 'text-olive' : 'text-text/60'
                              }`}>
                              <CheckCircle size={14} aria-hidden="true" />
                            </div>
                            <div>
                              <h4 className="font-medium text-text text-sm leading-tight">{service.label}</h4>
                            </div>
                          </div>
                          <div id={`${service.id}-desc`} className="sr-only">{service.description}</div>
                        </div>
                      ))}
                    </div>
                  </fieldset>

                  {/* Timeline and Budget */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-text mb-1">Timeline</label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 rounded-lg bg-white/80 border border-olive/30 focus:border-olive focus:ring-1 focus:ring-olive/50 outline-none transition-all text-text text-base"
                        aria-describedby="timeline-desc"
                      >
                        <option value="" className="bg-white">Select timeline</option>
                        {timelineOptions.map((option) => (
                          <option key={option} value={option} className="bg-white">{option}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-text mb-1">Budget Range</label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 rounded-lg bg-white/80 border border-olive/30 focus:border-olive focus:ring-1 focus:ring-olive/50 outline-none transition-all text-text text-base"
                        aria-describedby="budget-desc"
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
                    <label htmlFor="projectDetails" className="block text-sm font-medium text-text mb-1">Project Details</label>
                    <textarea
                      id="projectDetails"
                      name="projectDetails"
                      value={formData.projectDetails}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-3 py-2 rounded-lg bg-white/80 border border-olive/30 focus:border-olive focus:ring-1 focus:ring-olive/50 outline-none transition-all resize-none text-text placeholder-text/60 text-base"
                      placeholder="Share your vision, specific requirements, design preferences, or any questions..."
                      aria-describedby="projectDetails-desc"
                    />
                    <div id="projectDetails-desc" className="sr-only">Optional field to provide additional details about your construction project</div>
                  </div>

                  {/* Honeypot field - hidden from humans, visible to bots */}
                  <div style={{ position: 'absolute', left: '-9999px', visibility: 'hidden' }} aria-hidden="true">
                    <label htmlFor="website">Website (leave empty):</label>
                    <input
                      type="text"
                      id="website"
                      name="honeypot"
                      value={formData.honeypot}
                      onChange={handleInputChange}
                      tabIndex={-1}
                      autoComplete="off"
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
                    aria-describedby="submit-status"
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

                  <div id="submit-status" role="status" aria-live="polite">
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
                  </div>


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