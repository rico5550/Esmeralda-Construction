import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-light text-gold-400 mb-4">
              Esmeralda Construction
            </h3>
            <p className="text-stone-300 mb-6 leading-relaxed">
              Building dreams with expert craftsmanship for over 15 years.
              We're committed to delivering exceptional construction services
              that exceed expectations and stand the test of time.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-stone-700 p-3 rounded-full hover:bg-gold-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-stone-700 p-3 rounded-full hover:bg-gold-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-stone-700 p-3 rounded-full hover:bg-gold-600 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-light mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-stone-300 hover:text-gold-400 transition-colors">Home</a></li>
              <li><a href="#services" className="text-stone-300 hover:text-gold-400 transition-colors">Services</a></li>
              <li><a href="#about" className="text-stone-300 hover:text-gold-400 transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-stone-300 hover:text-gold-400 transition-colors">Contact</a></li>
              <li><a href="#" className="text-stone-300 hover:text-gold-400 transition-colors">Portfolio</a></li>
              <li><a href="#" className="text-stone-300 hover:text-gold-400 transition-colors">Testimonials</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-light mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-gold-400" />
                <span className="text-stone-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-gold-400" />
                <span className="text-stone-300">info@esmeraldaconstruction.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-gold-400" />
                <span className="text-stone-300">Greater Metro Area</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-stone-400 text-sm mb-4 md:mb-0">
            © 2024 Esmeralda Construction. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-stone-400 hover:text-gold-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-stone-400 hover:text-gold-400 transition-colors">Terms of Service</a>
            <a href="#" className="text-stone-400 hover:text-gold-400 transition-colors">Licensing</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;