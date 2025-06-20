import React from 'react';

const About = () => {
  const achievements = [
    {
      number: "25+",
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
    <section id="about" className="py-12 bg-cream">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-medium text-olive mb-4">
            <em>Crafting excellence</em> through <em>visionary design</em>
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg lg:text-xl text-text font-medium leading-relaxed">
              For over 25 years, Esmeralda Construction has stood as a beacon of architectural excellence,
              transforming dreams into tangible masterpieces that define luxury living and commercial sophistication.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Left - Content */}
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-medium text-olive leading-relaxed">
              Our foundation rests upon the pillars of integrity, innovation, and an unwavering commitment to excellence.
            </h3>

            <p className="text-xl text-text font-medium leading-relaxed">
              From conceptual vision to final revelation, we orchestrate every element with meticulous precision.
              Our experienced artisans blend time-honored craftsmanship with cutting-edge methodologies,
              creating structures that transcend mere buildings to become enduring legacies.
            </p>

            <p className="text-xl text-text font-medium leading-relaxed">
              Each project represents a unique collaboration between our expertise and your aspirations,
              resulting in spaces that not only meet today's demands but anticipate tomorrow's possibilities.
            </p>
          </div>

          {/* Right - Image */}
          <div className="relative flex justify-center">
            <div className="aspect-[4/3] bg-card rounded-sm overflow-hidden max-w-lg w-full border border-olive/30">
              <img
                src="images/DSC02322.jpg"
                alt="Luxury construction excellence"
                className="w-full h-full object-cover opacity-90"
              />
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="border-t border-olive/30 pt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-medium text-energy mb-2">
                  {achievement.number}
                </div>
                <div className="text-text font-medium tracking-wide uppercase text-sm">
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