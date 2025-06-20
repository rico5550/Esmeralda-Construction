import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-light text-olive mb-4">
              Esmeralda Construction
            </h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Building dreams with expert craftsmanship for over 15 years.
              We're committed to delivering exceptional construction services
              that exceed expectations and stand the test of time.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100064130920912&mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="bg-olive/20 p-3 rounded-full hover:bg-energy transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/esmeraldaconstructioninc?igsh=NTc4MTIwNjQ2YQ==" target="_blank" rel="noopener noreferrer" className="bg-olive/20 p-3 rounded-full hover:bg-energy transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://pin.it/1kyCE4uwY" target="_blank" rel="noopener noreferrer" className="bg-olive/20 p-3 rounded-full hover:bg-energy transition-colors">
                {/* Pinterest SVG */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.372 0 12 0 17.084 3.163 21.426 7.627 23.174c-.105-.949-.199-2.405.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.001 24c6.624 0 11.999-5.373 11.999-12C24 5.372 18.626.001 12.001.001z" />
                </svg>
              </a>
              <a href="https://www.tiktok.com/@esmeraldaconstructioninc?_t=ZS-8xLbSqDiP0y&_r=1" target="_blank" rel="noopener noreferrer" className="bg-olive/20 p-3 rounded-full hover:bg-energy transition-colors">
                {/* TikTok SVG */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.10z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-light text-olive mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/80 hover:text-energy transition-colors">Home</a></li>
              <li><a href="#services" className="text-white/80 hover:text-energy transition-colors">Services</a></li>
              <li><a href="#about" className="text-white/80 hover:text-energy transition-colors">About Us</a></li>
              <li><a href="#projects" className="text-white/80 hover:text-energy transition-colors">Featured Projects</a></li>
              <li><Link to="/projects" className="text-white/80 hover:text-energy transition-colors">Full Gallery</Link></li>
              <li><a href="#testimonials" className="text-white/80 hover:text-energy transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-energy transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-light text-olive mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-olive" />
                <span className="text-white/80">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-olive" />
                <span className="text-white/80">info@esmeraldaconstruction.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-olive" />
                <span className="text-white/80">Greater Metro Area</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-olive/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/60 text-sm mb-4 md:mb-0">
            © 2024 Esmeralda Construction. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-white/60 hover:text-energy transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-energy transition-colors">Terms of Service</a>
            <a href="#" className="text-white/60 hover:text-energy transition-colors">Licensing</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;