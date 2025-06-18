import React from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold mb-3">
            Ready to Start Your Project?
          </h2>
          <p className="text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Let's discuss your construction needs and turn your vision into reality.
            Contact us today for a free consultation and detailed project estimate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-6">Get In Touch</h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-orange-600 p-2 rounded-full">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-base mb-1">Phone</h4>
                  <p className="text-gray-300 text-sm">(555) 123-4567</p>
                  <p className="text-gray-400 text-xs">24/7 Emergency Services</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-orange-600 p-2 rounded-full">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-base mb-1">Email</h4>
                  <p className="text-gray-300 text-sm">info@esmeraldaconstruction.com</p>
                  <p className="text-gray-400 text-xs">Response within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-orange-600 p-2 rounded-full">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-base mb-1">Service Area</h4>
                  <p className="text-gray-300 text-sm">Greater Metro Area</p>
                  <p className="text-gray-400 text-xs">Licensed & Insured</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-orange-600 p-2 rounded-full">
                  <Clock size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-base mb-1">Business Hours</h4>
                  <p className="text-gray-300 text-sm">Monday - Friday: 7:00 AM - 6:00 PM</p>
                  <p className="text-gray-300 text-sm">Saturday: 8:00 AM - 4:00 PM</p>
                  <p className="text-gray-400 text-xs">Sunday: Emergency calls only</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Request a Quote</h3>

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium mb-1">First Name</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-colors text-sm"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-colors text-sm"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-colors text-sm"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <input
                  type="tel"
                  className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-colors text-sm"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Project Type</label>
                <select className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-colors text-sm">
                  <option>Select project type</option>
                  <option>Residential Construction</option>
                  <option>Commercial Construction</option>
                  <option>Renovation & Remodeling</option>
                  <option>Emergency Services</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Project Details</label>
                <textarea
                  rows={3}
                  className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-colors resize-none text-sm"
                  placeholder="Describe your project, timeline, and any specific requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-600 text-white px-4 py-3 rounded hover:bg-orange-700 transition-colors font-semibold flex items-center justify-center space-x-2 text-sm"
              >
                <Send size={16} />
                <span>Send Quote Request</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;