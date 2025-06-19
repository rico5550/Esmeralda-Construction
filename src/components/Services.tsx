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
    <section id="services" className="py-12 bg-warm-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl lg:text-3xl font-light text-stone-800 mb-3">
            Our Construction Services
          </h2>
          <p className="text-base text-stone-600 max-w-2xl mx-auto leading-relaxed">
            From residential dreams to commercial realities, we provide comprehensive
            construction services with unmatched quality and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-stone-50 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 group hover:-translate-y-1 border border-stone-200"
              >
                <div className="bg-warm-200 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:bg-gold-200 transition-colors">
                  <IconComponent className="text-stone-700 group-hover:text-gold-700 transition-colors" size={24} />
                </div>

                <h3 className="text-lg font-light text-stone-800 mb-3">
                  {service.title}
                </h3>

                <p className="text-stone-600 mb-4 leading-relaxed text-sm">
                  {service.description}
                </p>

                <ul className="space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-stone-700 text-sm">
                      <div className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <button className="bg-gold-500 text-stone-900 px-6 py-3 rounded-lg hover:bg-gold-400 transition-colors font-medium text-base">
            Request Service Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;