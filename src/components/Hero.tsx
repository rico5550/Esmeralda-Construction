import React from 'react';
import { ArrowRight, Award, Users, Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gray-900 text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Construction site"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-gray-900/60"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-24 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Building Dreams with
            <span className="text-orange-400 block">Expert Craftsmanship</span>
          </h1>
          
          <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">
            Transform your vision into reality with Esmeralda Construction. 
            We deliver exceptional residential and commercial construction services 
            with unwavering commitment to quality and excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition-all duration-300 flex items-center justify-center font-semibold text-lg group">
              Start Your Project
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
              View Our Work
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex items-center space-x-3">
              <div className="bg-orange-600 p-3 rounded-full">
                <Award size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold">15+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="bg-orange-600 p-3 rounded-full">
                <Users size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold">500+</div>
                <div className="text-gray-300">Happy Clients</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="bg-orange-600 p-3 rounded-full">
                <Calendar size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold">100%</div>
                <div className="text-gray-300">On-Time Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;