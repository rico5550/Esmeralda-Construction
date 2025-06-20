import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FeaturedProjects = () => {
    const projects = [
        {
            title: "Santa Fe Modern",
            description: "What once was a dated 1980's ranch home, this estate now boasts a sophisticated presence that captures the essence of contemporary luxury living.",
            image: "images/IMG_2381.jpg",
            id: "modern-estate"
        },
        {
            title: "Modern Mediterranean",
            description: "Experience the epitome of outdoor elegance where crystal-clear waters meet sophisticated design, creating an oasis of tranquility and refined leisure.",
            image: "/images/x-3.jpg",
            id: "luxury-pool"
        },
        {
            title: "Resort-Style Backyard",
            description: "Located in the heart of the metro area, this property is an epitome of refined elegance with timeless architectural appeal.",
            image: "images/DSC09486.jpg",
            id: "luxury-renovation"
        }
    ];

    return (
        <section id="projects" className="py-12 bg-cream">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center mb-8">
                    <h2 className="text-4xl lg:text-5xl font-medium text-olive mb-2">
                        Featured Projects
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="group cursor-pointer bg-card border border-olive/20 p-6 hover:border-olive/40 transition-all duration-300">
                            <div className="relative overflow-hidden mb-4">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors duration-300"></div>
                            </div>

                            <div className="space-y-3">
                                <h3 className="text-2xl font-medium text-olive group-hover:text-energy transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-text leading-relaxed font-medium text-xl">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        to="/projects"
                        className="inline-flex items-center text-xl font-medium text-olive border-b border-olive pb-1 hover:border-energy hover:text-energy transition-colors group"
                    >
                        View Full Gallery
                        <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects; 