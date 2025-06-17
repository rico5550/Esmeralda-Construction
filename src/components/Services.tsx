import React from 'react';
import { Home, Building, Wrench, Palette, Hammer, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Residential Construction',
      description: 'Custom homes, additions, and residential renovations built to your exact specifications with quality materials and expert craftsmanship.',
      features: ['Custom Home Building', 'Home Additions', 'Kitchen & Bath Remodels', 'Basement Finishing']
    },
    {
      icon: Building,
      title: 'Commercial Construction',
      description: 'Professional commercial spaces designed and built for functionality, durability, and aesthetic appeal to enhance your business.',
      features: ['Office Buildings', 'Retail Spaces', 'Warehouses', 'Tenant Improvements']
    },
    {
      icon: Wrench,
      title: 'Renovation & Remodeling',
      description: 'Transform existing spaces with comprehensive renovation services that breathe new life into your property.',
      features: ['Interior Renovations', 'Exterior Updates', 'Space Optimization', 'Modern Upgrades']
    },
    {
      icon: Palette,
      title: 'Design & Planning',
      description: 'Complete design services from concept to completion, ensuring your vision is realized with precision and style.',
      features: ['Architectural Design', '3D Visualization', 'Project Planning', 'Permit Assistance']
    },
    {
      icon: Hammer,
      title: 'General Contracting',
      description: 'Full-service contracting managing every aspect of your project from start to finish with professional oversight.',
      features: ['Project Management', 'Subcontractor Coordination', 'Quality Control', 'Timeline Management']
    },
    {
      icon: Shield,
      title: 'Emergency Services',
      description: 'Rapid response construction services for urgent repairs and emergency situations with 24/7 availability.',
      features: ['Storm Damage Repair', 'Water Damage Restoration', 'Structural Repairs', 'Emergency Boarding']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Construction Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From residential dreams to commercial realities, we provide comprehensive 
            construction services with unmatched quality and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group hover:-translate-y-1"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-100 transition-colors">
                  <IconComponent className="text-blue-700 group-hover:text-orange-600 transition-colors" size={32} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <button className="bg-blue-800 text-white px-8 py-4 rounded-lg hover:bg-blue-900 transition-colors font-semibold text-lg">
            Request Service Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;