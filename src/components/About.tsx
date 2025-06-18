import React from 'react';

const About = () => {
  const achievements = [
    {
      number: "15+",
      label: "Years of Excellence"
    },
    {
      number: "500+",
      label: "Projects Completed"
    },
    {
      number: "100%",
      label: "Client Satisfaction"
    }
  ];

  return (
    <section id="about" className="py-12 bg-gray-800">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-light text-white mb-4">
            <em>Crafting excellence</em> through <em>visionary design</em>
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-base lg:text-lg text-gray-300 font-light leading-relaxed">
              For over 15 years, Esmeralda Construction has stood as a beacon of architectural excellence,
              transforming dreams into tangible masterpieces that define luxury living and commercial sophistication.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Left - Content */}
          <div className="space-y-6">
            <h3 className="text-lg lg:text-xl font-light text-white leading-relaxed">
              Our foundation rests upon the pillars of integrity, innovation, and an unwavering commitment to excellence.
            </h3>

            <p className="text-base text-gray-400 font-light leading-relaxed">
              From conceptual vision to final revelation, we orchestrate every element with meticulous precision.
              Our experienced artisans blend time-honored craftsmanship with cutting-edge methodologies,
              creating structures that transcend mere buildings to become enduring legacies.
            </p>

            <p className="text-base text-gray-400 font-light leading-relaxed">
              Each project represents a unique collaboration between our expertise and your aspirations,
              resulting in spaces that not only meet today's demands but anticipate tomorrow's possibilities.
            </p>
          </div>

          {/* Right - Image */}
          <div className="relative">
            <div className="aspect-square bg-gray-700 rounded-sm overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&h=800&q=80"
                alt="Luxury construction excellence"
                className="w-full h-full object-cover opacity-90"
              />
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="border-t border-gray-700 pt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl lg:text-3xl font-light text-white mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-400 font-light tracking-wide uppercase text-xs">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;