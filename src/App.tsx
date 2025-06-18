import React from 'react';
import Hero from './components/Hero';
import FeaturedProjects from './components/FeaturedProjects';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Hero />
      <FeaturedProjects />
      <Testimonials />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;