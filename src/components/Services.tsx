import React from 'react';
import { Home, Building, Wrench, Palette, Hammer, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Building,
      title: 'Complete Construction Solutions',
      description: 'From custom homes to commercial spaces, we deliver comprehensive construction services tailored to your vision with expert craftsmanship and quality materials.',
      features: ['Custom Home Building', 'Commercial Buildings', 'Home Additions', 'Office & Retail Spaces', 'Kitchen & Bath Remodels', 'Warehouses & Industrial']
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
    }
  ];

  return (
    <section id="services" className="py-12 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl lg:text-5xl font-medium text-olive mb-3">
            Our Construction Services
          </h2>
          <p className="text-xl text-text max-w-2xl mx-auto leading-relaxed font-medium">
            From residential dreams to commercial realities, we provide comprehensive
            construction services with unmatched quality and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 group hover:-translate-y-1 border border-olive/20 hover:border-olive/40"
              >
                <div className="bg-olive/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:bg-energy/20 transition-colors">
                  <IconComponent className="text-olive group-hover:text-energy transition-colors" size={24} />
                </div>

                <h3 className="text-2xl font-medium text-olive mb-3">
                  {service.title}
                </h3>

                <p className="text-text mb-4 leading-relaxed text-lg font-medium">
                  {service.description}
                </p>

                <ul className="space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-text text-lg font-medium">
                      <div className="w-1.5 h-1.5 bg-energy rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <button className="bg-olive text-white px-6 py-3 rounded-lg hover:bg-olive-dark transition-colors font-medium text-xl">
            Request Service Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;