import React from 'react';
import { ArrowRight } from 'lucide-react';

const FeaturedProjects = () => {
    const projects = [
        {
            title: "Modern Family Estate",
            description: "What once was a dated 1980's ranch home, this estate now boasts a sophisticated presence that captures the essence of contemporary luxury living.",
            image: "images/IMG_2381.jpg",
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
            image: "images/DSc09486.jpg",
            id: "luxury-renovation"
        }
    ];

    return (
        <section className="py-12 bg-gray-900">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center mb-8">
                    <h2 className="text-2xl lg:text-3xl font-light text-white mb-2">
                        Featured Projects
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="group cursor-pointer">
                            <div className="relative overflow-hidden mb-4">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                            </div>

                            <div className="space-y-3">
                                <h3 className="text-lg font-medium text-white group-hover:text-gray-300 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed font-light text-base">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="inline-flex items-center text-base font-medium text-white border-b border-white pb-1 hover:border-orange-500 hover:text-orange-500 transition-colors group">
                        More to admire
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects; 