import React from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            quote: "Esmeralda Construction exceeded our expectations every step of the way. They pivoted and found solutions when we encountered challenges. It was a pleasure working with Esmeralda Construction and our home turned out stunning!",
            client: "MR | Metro Area, CA",
            id: "testimonial-1"
        },
        {
            quote: "Working with the construction team was a dream from the start. They nailed the design and were fantastic throughout, fielding questions, liaising with our architect, and meeting with us. They were very responsive, thorough, detail oriented. They earned my trust almost immediately.",
            client: "LP | Downtown District, CA",
            id: "testimonial-2"
        },
        {
            quote: "The depth of the team along with the professionalism and care that goes into the project with a beautiful and structurally sound end result.",
            client: "TS | Suburban Heights, CA",
            id: "testimonial-3"
        }
    ];

    return (
        <section className="py-12 bg-stone-900">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center mb-8">
                    <h2 className="text-2xl lg:text-3xl font-light text-stone-50 mb-2">
                        Testimonials
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="bg-stone-800 p-6 border border-stone-700">
                            <blockquote className="text-stone-300 leading-relaxed mb-4 font-light text-sm">
                                "{testimonial.quote}"
                            </blockquote>
                            <cite className="text-xs font-light text-gold-400 not-italic">
                                {testimonial.client}
                            </cite>
                        </div>
                    ))}
                </div>

                {/* "As seen in" section */}
                <div className="mt-12 text-center">
                    <p className="text-xs text-stone-400 font-light mb-4 tracking-wide uppercase">
                        As seen in
                    </p>

                    <div className="text-center">
                        <h3 className="text-lg lg:text-xl font-light text-stone-50 mb-2">
                            What They're Saying
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials; 