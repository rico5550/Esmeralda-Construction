import React from 'react';
import { CheckCircle, Target, Heart, Star } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: CheckCircle,
      title: 'Quality Craftsmanship',
      description: 'Every project reflects our commitment to superior materials, skilled workmanship, and attention to detail.'
    },
    {
      icon: Target,
      title: 'On-Time Delivery',
      description: 'We respect your time and investment with precise project management and reliable completion schedules.'
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Your satisfaction drives everything we do, from initial consultation to final walkthrough and beyond.'
    },
    {
      icon: Star,
      title: 'Excellence Always',
      description: 'We continuously exceed expectations through innovation, expertise, and unwavering commitment to excellence.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Construction team at work"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-orange-600 text-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm">Years Building Dreams</div>
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Building Trust Through
              <span className="text-orange-600 block">Quality Construction</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              For over 15 years, Esmeralda Construction has been the trusted choice for 
              residential and commercial construction throughout the metro area. Our foundation 
              is built on integrity, craftsmanship, and an unwavering commitment to bringing 
              your vision to life.
            </p>

            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              From ground-breaking to final inspection, we manage every detail with precision 
              and care. Our experienced team combines traditional building expertise with 
              modern techniques and materials to deliver exceptional results that stand the test of time.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                      <IconComponent className="text-blue-700" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{value.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;