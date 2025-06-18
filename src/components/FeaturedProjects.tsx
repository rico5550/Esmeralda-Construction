import React from 'react';
import { ArrowRight } from 'lucide-react';

const FeaturedProjects = () => {
    const projects = [
        {
            title: "Modern Family Estate",
            description: "What once was a dated 1980's ranch home, this estate now boasts a sophisticated presence that captures the essence of contemporary luxury living.",
            image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&h=600&q=80",
            id: "modern-estate"
        },
        {
            title: "Luxury Pool & Outdoor Living",
            description: "Experience the epitome of outdoor elegance where crystal-clear waters meet sophisticated design, creating an oasis of tranquility and refined leisure.",
            image: "/images/x-3.jpg",
            id: "luxury-pool"
        },
        {
            title: "Luxury Residential Renovation",
            description: "Located in the heart of the metro area, this property is an epitome of refined elegance with timeless architectural appeal.",
            image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&h=600&q=80",
            id: "luxury-renovation"
        }
    ];

    return (
        <section className="py-24 bg-gray-900">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-light text-white mb-4">
                        Featured Projects
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {projects.map((project) => (
                        <div key={project.id} className="group cursor-pointer">
                            <div className="relative overflow-hidden mb-6">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-medium text-white group-hover:text-gray-300 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed font-light">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <button className="inline-flex items-center text-lg font-medium text-white border-b-2 border-white pb-1 hover:border-orange-500 hover:text-orange-500 transition-colors group">
                        More to admire
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects; 