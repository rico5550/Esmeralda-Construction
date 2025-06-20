import React from 'react';
import Hero from '../components/Hero';
import FeaturedProjects from '../components/FeaturedProjects';
import Testimonials from '../components/Testimonials';
import Services from '../components/Services';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import PrivacyBanner from '../components/PrivacyBanner';
import MonitoringDashboard from '../components/MonitoringDashboard';

const HomePage = () => {
    return (
        <div className="min-h-screen bg-gray-900">
            {/* Skip Links */}
            <a href="#main-content" className="skip-link">Skip to main content</a>
            <a href="#contact" className="skip-link">Skip to contact form</a>

            <Hero />
            <main id="main-content">
                <FeaturedProjects />
                <Testimonials />
                <Services />
                <About />
                <Contact />
            </main>
            <Footer />
            <PrivacyBanner />
            <MonitoringDashboard />
        </div>
    );
};

export default HomePage; 