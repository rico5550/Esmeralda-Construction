import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be implemented later
    console.log('Form submitted:', { ...formData, selectedServices });
  };

  return (
    <section id="contact" className="relative bg-gray-900 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10 py-16">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-light text-white mb-4">
              Let's <em className="text-orange-400">Create</em> Something Extraordinary
            </h2>
            <p className="text-lg lg:text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
              Transform your vision into reality with our expert craftsmanship and unparalleled attention to detail.
            </p>
            <div className="w-20 h-0.5 bg-orange-400 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="xl:col-span-1 space-y-6">
              <div>
                <h3 className="text-xl font-light text-white mb-6">Connect With Us</h3>

                <div className="space-y-4">
                  <div className="group">
                    <div className="flex items-start space-x-3">
                      <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <Phone size={16} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white text-base mb-1">Direct Line</h4>
                        <p className="text-gray-300 text-sm mb-1">(555) 123-4567</p>
                        <p className="text-gray-400 text-xs">24/7 Emergency Services</p>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <div className="flex items-start space-x-3">
                      <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <Mail size={16} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white text-base mb-1">Email</h4>
                        <p className="text-gray-300 text-sm mb-1">info@esmeraldaconstruction.com</p>
                        <p className="text-gray-400 text-xs">Response within 4 hours</p>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <div className="flex items-start space-x-3">
                      <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <MapPin size={16} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white text-base mb-1">Service Area</h4>
                        <p className="text-gray-300 text-sm mb-1">Greater Metro Area</p>
                        <p className="text-gray-400 text-xs">Licensed • Insured • Bonded</p>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <div className="flex items-start space-x-3">
                      <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <Clock size={16} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white text-base mb-1">Business Hours</h4>
                        <p className="text-gray-300 text-sm">Mon-Fri: 7AM-6PM</p>
                        <p className="text-gray-300 text-sm">Sat: 8AM-4PM</p>
                        <p className="text-gray-400 text-xs">Sun: Emergency only</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote Request Form */}
            <div className="xl:col-span-2">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-light text-white mb-6">Request Your Custom Quote</h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1">First Name*</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-orange-400 focus:ring-1 focus:ring-orange-400/50 outline-none transition-all text-white placeholder-gray-400 text-sm"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1">Last Name*</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-orange-400 focus:ring-1 focus:ring-orange-400/50 outline-none transition-all text-white placeholder-gray-400 text-sm"
                        placeholder="Doe"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1">Phone*</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-orange-400 focus:ring-1 focus:ring-orange-400/50 outline-none transition-all text-white placeholder-gray-400 text-sm"
                        placeholder="(555) 123-4567"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1">Email*</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-orange-400 focus:ring-1 focus:ring-orange-400/50 outline-none transition-all text-white placeholder-gray-400 text-sm"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-orange-400 focus:ring-1 focus:ring-orange-400/50 outline-none transition-all text-white placeholder-gray-400 text-sm"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1">Project Address</label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-orange-400 focus:ring-1 focus:ring-orange-400/50 outline-none transition-all text-white placeholder-gray-400 text-sm"
                        placeholder="Project location"
                      />
                    </div>
                  </div>

                  {/* Services Selection */}
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-2">Services Needed*</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {services.map((service) => (
                        <div
                          key={service.id}
                          className={`relative cursor-pointer p-2 rounded-lg border transition-all duration-200 hover:scale-105 ${selectedServices.includes(service.id)
                            ? 'border-orange-400 bg-orange-400/10'
                            : 'border-white/20 bg-white/5 hover:border-white/30'
                            }`}
                          onClick={() => handleServiceToggle(service.id)}
                        >
                          <div className="flex items-center space-x-2">
                            <div className={`transition-all duration-300 ${selectedServices.includes(service.id) ? 'text-orange-400' : 'text-gray-400'
                              }`}>
                              <CheckCircle size={14} />
                            </div>
                            <div>
                              <h4 className="font-medium text-white text-xs leading-tight">{service.label}</h4>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Timeline and Budget */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1">Timeline</label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-orange-400 focus:ring-1 focus:ring-orange-400/50 outline-none transition-all text-white text-sm"
                      >
                        <option value="" className="bg-gray-800">Select timeline</option>
                        {timelineOptions.map((option) => (
                          <option key={option} value={option} className="bg-gray-800">{option}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1">Budget Range</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-orange-400 focus:ring-1 focus:ring-orange-400/50 outline-none transition-all text-white text-sm"
                      >
                        <option value="" className="bg-gray-800">Select budget range</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range} className="bg-gray-800">{range}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1">Project Details</label>
                    <textarea
                      name="projectDetails"
                      value={formData.projectDetails}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-orange-400 focus:ring-1 focus:ring-orange-400/50 outline-none transition-all resize-none text-white placeholder-gray-400 text-sm"
                      placeholder="Share your vision, specific requirements, design preferences, or any questions..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 text-base shadow-lg hover:shadow-orange-500/25 hover:scale-105"
                  >
                    <Send size={16} />
                    <span>Send Quote Request</span>
                  </button>

                  <p className="text-gray-400 text-xs text-center">
                    We'll respond within 4 hours with a detailed consultation proposal
                  </p>
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