import React from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            quote: `I am working with Valeria and Jose to implement a landscaping plan for my new construction house. They have been patient, clear, and responsive with my inquiries. They have went over all of the options available to me, the steps/phases they are constructing my backyard, and all of my follow-up inquiries I made as I indecisive at first on same if the cosmetic touches like stone veneer and paver/concrete choices. Looking forward to starting my project in May/June.`,
            client: "Greg Vaughn",
            id: "testimonial-1"
        },
        {
            quote: `I used Esmeralda construction to build my pool and complete landscaping. It has been nothing but a great experience, I wouldn't use any other companies after working with them. Jose, Luis and their whole team are great and honest people. The whole process went like it was supposed to, they respected their estimation and delay. Legit people & company.`,
            client: "Antoine Haquette",
            id: "testimonial-2"
        },
        {
            quote: `We couldn't be happier with the incredible work Esmeralda Construction did on our pool, backyard, and front yard! Special shout-out to Jose and Luis for their outstanding craftsmanship and dedication—they truly went above and beyond to make our vision a reality.

            This is the second home we've had them work on, and the results speak for themselves. In fact, in our neighborhood alone, at least 15 homes have used their services after seeing the amazing job they did for us. We also recommended them to a friend, who was just as thrilled with their work.

            If you're looking for top-notch construction and landscape design, Esmeralda Construction, with Jose and Luis on the team, is the way to go. Highly recommended`,
            client: "Ken Johnson",
            id: "testimonial-3"
        }
    ];

    return (
        <section id="testimonials" className="py-12 bg-card">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-medium text-olive mb-2">
                        Testimonials
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="bg-cream p-6 border border-olive/30 hover:border-olive/50 transition-all duration-300">
                            <blockquote className="text-text leading-relaxed mb-4 font-medium text-lg">
                                "{testimonial.quote}"
                            </blockquote>
                            <cite className="text-base font-medium text-energy not-italic">
                                {testimonial.client}
                            </cite>
                        </div>
                    ))}
                </div>

                {/* "As seen in" section */}
                <div className="mt-12 text-center">
                    <p className="text-sm text-text/60 font-medium mb-4 tracking-wide uppercase">
                        As seen in
                    </p>

                    <div className="text-center">
                        <h3 className="text-xl lg:text-2xl font-medium text-olive mb-2">
                            What They're Saying
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials; 