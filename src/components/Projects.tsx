import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, MapPin, Calendar, Square } from 'lucide-react';
import ImageGallery from './ImageGallery';

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [galleryOpen, setGalleryOpen] = useState(false);
    const [galleryImages, setGalleryImages] = useState<string[]>([]);
    const navigate = useNavigate();

    const handleConsultationClick = () => {
        navigate('/');
        // Small delay to ensure navigation completes before scrolling
        setTimeout(() => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    // Generate array of images for Menifee_CA_ID_2 folder
    const menifeeImages = [
        'w.jpg', 'w-20.jpg', 'w-21.jpg', 'w-22.jpg', 'w-23.jpg', 'w-24.jpg', 'w-25.jpg', 'w-26.jpg', 'w-27.jpg', 'w-28.jpg',
        'w-29.jpg', 'w-30.jpg', 'w-31.jpg', 'w-32.jpg', 'w-33.jpg', 'w-34.jpg', 'w-35.jpg', 'w-36.jpg', 'w-37.jpg', 'w-38.jpg',
        'w-39.jpg', 'w-40.jpg', 'w-41.jpg', 'w-42.jpg', 'w-43.jpg', 'w-44.jpg', 'w-45.jpg', 'w-46.jpg', 'w-47.jpg', 'w-48.jpg',
        'w-49.jpg', 'w-50.jpg', 'x.jpg', 'x-2.jpg', 'x-3.jpg', 'x-4.jpg', 'x-5.jpg', 'x-6.jpg', 'x-7.jpg', 'x-8.jpg',
        'x-9.jpg', 'x-10.jpg', 'x-11.jpg', 'x-12.jpg', 'x-13.jpg', 'x-14.jpg', 'x-15.jpg', 'x-16.jpg', 'x-17.jpg', 'x-18.jpg', 'x-19.jpg'
    ].map(img => `images/Menifee_CA_ID_2/${img}`);

    // Generate array of images for Santa_Fe_ID_1 folder
    const santaFeImages = [
        'IMG_2118.jpeg', 'IMG_2125.jpeg', 'IMG_2139.jpeg', 'IMG_2185.jpeg', 'IMG_2188.jpeg', 'IMG_2195.jpeg',
        'IMG_2202.jpeg', 'IMG_2356.JPG', 'IMG_2367.JPG', 'IMG_2368.JPG', 'IMG_2372.JPG', 'IMG_2381.JPG',
        'IMG_2387.JPG', 'IMG_2390.JPG'
    ].map(img => `images/Santa_Fe_ID_1/${img}`);

    // Generate array of images for Sunforest_ID_3 folder
    const sunforestImages = [
        'DJI_0277.jpg', 'DJI_0279.jpg', 'DJI_0281.jpg', 'DJI_0283.jpg', 'DJI_0289.jpg', 'DJI_0291.jpg', 'DJI_0292.jpg',
        'DSC09217.jpg', 'DSC09220.jpg', 'DSC09226.jpg', 'DSC09238.jpg', 'DSC09241.jpg', 'DSC09247.jpg', 'DSC09250.jpg',
        'DSC09256.jpg', 'DSC09259.jpg', 'DSC09274.jpg', 'DSC09286.jpg', 'DSC09292.jpg', 'DSC09298.jpg', 'DSC09301.jpg',
        'DSC09304.jpg', 'DSC09310.jpg', 'DSC09313.jpg', 'DSC09319.jpg', 'DSC09328.jpg', 'DSC09334.jpg', 'DSC09337.jpg',
        'DSC09343.jpg', 'DSC09346.jpg', 'DSC09349.jpg', 'DSC09353.jpg', 'DSC09358.jpg', 'DSC09364.jpg', 'DSC09367.jpg',
        'DSC09375.jpg', 'DSC09387.jpg', 'DSC09390.jpg', 'DSC09393.jpg', 'DSC09402.jpg', 'DSC09405.jpg', 'DSC09414.jpg',
        'DSC09420.jpg', 'DSC09423.jpg', 'DSC09429.jpg', 'DSC09432.jpg', 'DSC09435.jpg', 'DSC09438.jpg', 'DSC09441.jpg',
        'DSC09444.jpg', 'DSC09447.jpg', 'DSC09450.jpg', 'DSC09453.jpg', 'DSC09456.jpg', 'DSC09459.jpg', 'DSC09459.png',
        'DSC09462.jpg', 'DSC09465.jpg', 'DSC09468.jpg', 'DSC09471.jpg', 'DSC09480.jpg', 'DSC09483.jpg', 'DSC09486.jpg',
        'DSC09489.jpg', 'DSC09492.jpg'
    ].map(img => `images/Sunforest_ID_3/${img}`);

    // Generate array of images for Ascot_Hill_ID_4 folder
    const ascotHillImages = [
        'DJI_0417.jpg', 'DJI_0418.jpg', 'DJI_0420.jpg', 'DJI_0422.jpg',
        'DSC01797.jpg', 'DSC01799.jpg', 'DSC01803.jpg', 'DSC01809.jpg', 'DSC01815.jpg', 'DSC01818.jpg', 'DSC01821.jpg',
        'DSC01824.jpg', 'DSC01827.jpg', 'DSC01830.jpg', 'DSC01833.jpg', 'DSC01836.jpg', 'DSC01838.jpg', 'DSC01841.jpg',
        'DSC01844.jpg', 'DSC01848.jpg', 'DSC01851.jpg', 'DSC01854.jpg', 'DSC01857.jpg', 'DSC01864.jpg', 'DSC01867.jpg',
        'DSC01870.jpg', 'DSC01873.jpg', 'DSC01876.jpg', 'DSC01879.jpg', 'DSC01882.jpg', 'DSC01887.jpg', 'DSC01890.jpg',
        'DSC01893.jpg', 'DSC01899.jpg', 'DSC01902.jpg', 'DSC01905.jpg', 'DSC01909.jpg', 'DSC01911.jpg', 'DSC01915.jpg',
        'DSC01920.jpg', 'DSC01923.jpg', 'DSC01926.jpg', 'DSC01929.jpg', 'DSC01932.jpg', 'DSC01936.jpg', 'DSC01938.jpg',
        'DSC01944.jpg', 'DSC01947.jpg', 'DSC01951.jpg', 'DSC01954.jpg', 'DSC01957.jpg', 'DSC01962.jpg', 'DSC01968.jpg',
        'DSC01970.jpg', 'DSC01973.jpg', 'DSC01974.jpg', 'DSC01977.jpg', 'DSC01980.jpg'
    ].map(img => `images/Ascot_Hill_ID_4/${img}`);

    // Generate array of images for Wildomar_CA_ID_5 folder  
    const wildomarImages = [
        'DJI_0720.jpg', 'DJI_0721.jpg', 'DJI_0722.jpg', 'DJI_0723.jpg', 'DJI_0724.jpg', 'DJI_0726.jpg', 'DJI_0727.jpg', 'DJI_0728.jpg',
        'DSC02151.jpg', 'DSC02157.jpg', 'DSC02160.jpg', 'DSC02175.jpg', 'DSC02178.jpg', 'DSC02181.jpg', 'DSC02184.jpg',
        'DSC02190.jpg', 'DSC02193.jpg', 'DSC02196.jpg', 'DSC02202.jpg', 'DSC02208.jpg', 'DSC02211.jpg', 'DSC02226.jpg',
        'DSC02229.jpg', 'DSC02235.jpg', 'DSC02238.jpg', 'DSC02247.jpg', 'DSC02250.jpg', 'DSC02253.jpg', 'DSC02259.jpg',
        'DSC02262.jpg', 'DSC02268.jpg', 'DSC02277.jpg', 'DSC02289.jpg', 'DSC02292.jpg', 'DSC02295.jpg', 'DSC02298.jpg',
        'DSC02304.jpg', 'DSC02310.jpg', 'DSC02316.jpg', 'DSC02322.jpg', 'DSC02325.jpg', 'DSC02328.jpg', 'DSC02331.jpg',
        'DSC02334.jpg', 'DSC02337.jpg'
    ].map(img => `images/Wildomar_CA_ID_5/${img}`);

    const openMenifeeGallery = () => {
        setGalleryImages(menifeeImages);
        setGalleryOpen(true);
    };

    const openSantaFeGallery = () => {
        setGalleryImages(santaFeImages);
        setGalleryOpen(true);
    };

    const openSunforestGallery = () => {
        setGalleryImages(sunforestImages);
        setGalleryOpen(true);
    };

    const openAscotHillGallery = () => {
        setGalleryImages(ascotHillImages);
        setGalleryOpen(true);
    };

    const openWildomarGallery = () => {
        setGalleryImages(wildomarImages);
        setGalleryOpen(true);
    };

    const projects = [
        {
            id: 1,
            title: "Santa Fe Modern Estate",
            category: "residential",
            description: "What once was a dated 1980's ranch home, this estate now boasts a sophisticated presence that captures the essence of contemporary luxury living.",
            longDescription: "This comprehensive renovation transformed a dated ranch home into a stunning modern estate. The project included complete interior redesign, architectural updates, and premium finishes throughout.",
            image: "images/IMG_2381.jpg",
            location: "Santa Fe, NM",
            year: "2023",
            size: "4,200 sq ft",
            features: ["Custom Kitchen", "Master Suite Addition", "Pool & Spa", "Outdoor Kitchen"]
        },
        {
            id: 2,
            title: "Modern Mediterranean Pool & Spa",
            category: "outdoor",
            description: "Experience the epitome of outdoor elegance where crystal-clear waters meet sophisticated design, creating an oasis of tranquility and refined leisure.",
            longDescription: "A complete outdoor living transformation featuring a stunning pool, spa, and entertainment area with Mediterranean-inspired design elements.",
            image: "/images/x-3.jpg",
            location: "Metro Area",
            year: "2023",
            size: "Pool: 40' x 20'",
            features: ["Infinity Pool", "Hot Tub/Spa", "Outdoor Kitchen", "Fire Features"]
        },
        {
            id: 3,
            title: "Resort-Style Backyard Oasis",
            category: "outdoor",
            description: "Located in the heart of the metro area, this property is an epitome of refined elegance with timeless architectural appeal.",
            longDescription: "A complete backyard transformation that brings resort-style luxury to a residential setting with premium landscaping and outdoor amenities.",
            image: "images/DSC09486.jpg",
            location: "Metro Area",
            year: "2024",
            size: "1 acre",
            features: ["Resort Pool", "Pavilion", "Landscaping", "Outdoor Lighting"]
        },
        {
            id: 4,
            title: "Luxury Kitchen Renovation",
            category: "residential",
            description: "A complete kitchen transformation featuring premium materials, custom cabinetry, and modern appliances for the ultimate culinary experience.",
            longDescription: "This kitchen renovation showcases our expertise in creating functional yet beautiful spaces with high-end finishes and thoughtful design.",
            image: "images/Ascot_Hill_ID_4/DSC01882.jpg",
            location: "Metro Area",
            year: "2023",
            size: "450 sq ft",
            features: ["Custom Cabinetry", "Quartz Countertops", "Premium Appliances", "Wine Storage"]
        },
        {
            id: 5,
            title: "Commercial Office Build-Out",
            category: "commercial",
            description: "Modern office space designed for productivity and style, featuring open floor plans and contemporary finishes.",
            longDescription: "A comprehensive commercial build-out that maximizes functionality while maintaining aesthetic appeal for a growing business.",
            image: "images/Wildomar_CA_ID_5/DSC02325.jpg",
            location: "Downtown Area",
            year: "2024",
            size: "3,500 sq ft",
            features: ["Open Floor Plan", "Modern Lighting", "Break Room", "Conference Rooms"]
        },
        {
            id: 6,
            title: "Elegant Bathroom Suite",
            category: "residential",
            description: "A spa-like bathroom retreat featuring luxury fixtures, natural stone, and contemporary design elements.",
            longDescription: "This master bathroom renovation creates a personal sanctuary with premium materials and thoughtful design details.",
            image: "images/IMG_2188.jpeg",
            location: "Metro Area",
            year: "2023",
            size: "280 sq ft",
            features: ["Walk-in Shower", "Soaking Tub", "Double Vanity", "Heated Floors"]
        }
    ];

    const categories = [
        { id: 'all', label: 'All Projects', count: projects.length },
        { id: 'residential', label: 'Residential', count: projects.filter(p => p.category === 'residential').length },
        { id: 'commercial', label: 'Commercial', count: projects.filter(p => p.category === 'commercial').length },
        { id: 'outdoor', label: 'Outdoor Living', count: projects.filter(p => p.category === 'outdoor').length }
    ];

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => project.category === activeFilter);

    return (
        <section id="gallery" className="py-20 bg-cream">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-6xl font-medium text-olive mb-6">
                        Our Portfolio
                    </h2>
                    <p className="text-xl lg:text-2xl text-text max-w-3xl mx-auto leading-relaxed font-medium">
                        Discover our collection of exceptional projects that showcase our commitment
                        to quality craftsmanship and innovative design solutions.
                    </p>
                </div>

                {/* Filter Categories */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveFilter(category.id)}
                            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeFilter === category.id
                                ? 'bg-olive text-white shadow-lg'
                                : 'bg-white text-olive border border-olive/30 hover:border-olive hover:bg-olive/10'
                                }`}
                        >
                            {category.label} ({category.count})
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            onClick={project.id === 1 ? openSantaFeGallery : project.id === 2 ? openMenifeeGallery : project.id === 3 ? openSunforestGallery : project.id === 4 ? openAscotHillGallery : project.id === 5 ? openWildomarGallery : undefined}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    if (project.id === 1) {
                                        openSantaFeGallery();
                                    } else if (project.id === 2) {
                                        openMenifeeGallery();
                                    } else if (project.id === 3) {
                                        openSunforestGallery();
                                    } else if (project.id === 4) {
                                        openAscotHillGallery();
                                    } else if (project.id === 5) {
                                        openWildomarGallery();
                                    }
                                }
                            }}
                            className="group cursor-pointer bg-white border border-olive/20 rounded-lg overflow-hidden hover:border-olive/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-olive focus:ring-offset-2"
                            tabIndex={project.id === 1 || project.id === 2 || project.id === 3 || project.id === 4 || project.id === 5 ? 0 : -1}
                            role={project.id === 1 || project.id === 2 || project.id === 3 || project.id === 4 || project.id === 5 ? "button" : undefined}
                            aria-label={project.id === 1 || project.id === 2 || project.id === 3 || project.id === 4 || project.id === 5 ? `Open gallery for ${project.title}` : undefined}
                        >
                            {/* Project Image */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                {/* Category Badge */}
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-energy text-white text-sm font-medium rounded-full capitalize">
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="p-6">
                                <h3 className="text-2xl font-medium text-olive group-hover:text-energy transition-colors mb-3">
                                    {project.title}
                                </h3>

                                <p className="text-text leading-relaxed font-medium text-lg mb-4">
                                    {project.description}
                                </p>

                                {/* Project Details */}
                                <div className="space-y-2 mb-4">
                                    <div className="flex items-center text-text/80 text-sm">
                                        <MapPin size={16} className="mr-2 text-olive" />
                                        {project.location}
                                    </div>
                                    <div className="flex items-center text-text/80 text-sm">
                                        <Calendar size={16} className="mr-2 text-olive" />
                                        {project.year}
                                    </div>
                                    <div className="flex items-center text-text/80 text-sm">
                                        <Square size={16} className="mr-2 text-olive" />
                                        {project.size}
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="mb-4">
                                    <div className="flex flex-wrap gap-2">
                                        {project.features.slice(0, 3).map((feature, idx) => (
                                            <span
                                                key={idx}
                                                className="px-2 py-1 bg-olive/10 text-olive text-xs rounded-full"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                        {project.features.length > 3 && (
                                            <span className="px-2 py-1 bg-olive/10 text-olive text-xs rounded-full">
                                                +{project.features.length - 3} more
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* View Details Link */}
                                <div className="pt-4 border-t border-olive/20">
                                    <button className="inline-flex items-center text-olive hover:text-energy font-medium transition-colors group">
                                        View Details
                                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center">
                    <div className="bg-white border border-olive/30 rounded-lg p-8 max-w-2xl mx-auto">
                        <h3 className="text-2xl lg:text-3xl font-medium text-olive mb-4">
                            Ready to Start Your Project?
                        </h3>
                        <p className="text-text font-medium text-lg mb-6">
                            Let's discuss your vision and create something extraordinary together.
                        </p>
                        <button
                            onClick={handleConsultationClick}
                            className="bg-olive text-white px-8 py-3 rounded-lg hover:bg-olive-dark transition-colors font-medium text-lg inline-flex items-center group"
                        >
                            Get a Quote
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Image Gallery Modal */}
            <ImageGallery
                isOpen={galleryOpen}
                onClose={() => setGalleryOpen(false)}
                images={galleryImages}
            />
        </section>
    );
};

export default Projects; 