import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';

const Hero = () => {
  const slides = [
    {
      image: '/images/hero/x-14.jpg',
      alt: 'Luxury construction project showcase'
    },
    {
      image: '/images/hero/IMG_2125.jpeg',
      alt: 'Modern architectural excellence'
    },
    {
      image: '/images/hero/DSC01977.jpg',
      alt: 'Premium construction craftsmanship'
    },
    {
      image: '/images/hero/w-44.jpg',
      alt: 'Sophisticated building design'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Auto-advance slideshow
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlay, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlay(false); // Pause auto-play when user interacts
    setTimeout(() => setIsAutoPlay(true), 10000); // Resume after 10 seconds
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <section id="home" className="relative bg-cream">
        {/* Slideshow Container */}
        <div className="relative h-screen overflow-hidden">
          {/* Images */}
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-slate-800/30 to-transparent"></div>

          {/* Hamburger Menu Overlay - Top Right */}
          <div className="absolute top-8 right-8 z-20">
            <button
              onClick={toggleSidebar}
              className="flex items-center space-x-3 text-white hover:text-energy transition-colors"
              aria-label="Toggle menu"
            >
              <Menu size={24} />
              <span className="text-lg font-light tracking-wider uppercase">Menu</span>
            </button>
          </div>

          {/* Company Logo Overlay - Center */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-center text-white">
              <h1 className="text-4xl lg:text-6xl font-normal tracking-wider uppercase mb-4 font-cinzel">
                Esmeralda Construction Inc.
              </h1>
            </div>
          </div>

          {/* Content Overlay - Bottom Left */}
          <div className="absolute bottom-20 left-8 right-8 lg:left-12 lg:right-auto">
            <div className="max-w-2xl text-white">
              <h2 className="text-2xl lg:text-3xl font-light mb-6 leading-tight font-cinzel">
                Allow us to introduce ourselves...
              </h2>

              <p className="text-lg lg:text-xl mb-8 font-light leading-relaxed opacity-90">
                Premier luxury construction firm delivering unparalleled solutions for
                Custom Residential, Commercial, and Renovation projects nationwide.
              </p>

              <button className="inline-flex items-center text-lg font-medium text-white border-b-2 border-white pb-1 hover:border-energy hover:text-energy transition-colors group">
                Get to know us
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-olive/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 group z-20"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-olive/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 group z-20"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                  ? 'bg-olive scale-110'
                  : 'bg-white/50 hover:bg-energy/70'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Elegant tagline section */}
        <div className="bg-card py-24">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-2xl lg:text-4xl font-light text-text mb-6">
              <em>Creating lasting structures</em> that extend <em>beyond</em> expectations.
            </h2>
          </div>
        </div>
      </section>

      {/* Backdrop overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-slate-900/50 z-40 transition-opacity duration-300"
          onClick={closeSidebar}
        />
      )}

      {/* Slide-out sidebar */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-card shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        {/* Sidebar header */}
        <div className="flex justify-between items-center p-6 border-b border-olive">
          <span className="text-lg font-light text-text">Menu</span>
          <button
            onClick={closeSidebar}
            className="p-2 text-text hover:text-energy transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Sidebar navigation */}
        <nav className="p-6">
          <div className="flex flex-col space-y-8">
            <a
              href="#home"
              className="text-text hover:text-energy transition-colors font-light text-xl"
              onClick={closeSidebar}
            >
              Home
            </a>
            <a
              href="#projects"
              className="text-text hover:text-energy transition-colors font-light text-xl"
              onClick={closeSidebar}
            >
              Featured Projects
            </a>
            <Link
              to="/projects"
              className="text-text hover:text-energy transition-colors font-light text-xl"
              onClick={closeSidebar}
            >
              Full Gallery
            </Link>
            <a
              href="#testimonials"
              className="text-text hover:text-energy transition-colors font-light text-xl"
              onClick={closeSidebar}
            >
              Testimonials
            </a>
            <a
              href="#services"
              className="text-text hover:text-energy transition-colors font-light text-xl"
              onClick={closeSidebar}
            >
              Services
            </a>
            <a
              href="#about"
              className="text-text hover:text-energy transition-colors font-light text-xl"
              onClick={closeSidebar}
            >
              About
            </a>

            {/* CTA button in sidebar */}
            <div className="pt-6 border-t border-olive">
              <button
                className="w-full inline-flex items-center justify-center text-lg font-medium text-white bg-olive hover:bg-olive-dark transition-colors py-3 px-6"
                onClick={closeSidebar}
              >
                Get a Quote
              </button>
            </div>
          </div>
        </nav>

        {/* Logo at bottom of sidebar */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <img
            src="/images/EC_logo_masked.png"
            alt="Esmeralda Construction Logo"
            className="h-16 w-auto opacity-90"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;