import React from 'react';
import HeroCarousel from '../components/HeroCarousel';

const Hero: React.FC = () => {
  return (
    <section className="bg-white dark:bg-primary-intro pb-20 md:pb-40 relative transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto px-6 pt-10 relative">
        
        {/* Carousel Background */}
        <HeroCarousel />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 md:p-12">
          
          {/* Logo (Optional, keeping it minimal) */}
          {/* <img src="./public/images/logobxfinal.png" alt="Billy G Logo" className="w-20 md:w-28 mb-4" /> */}
          
          <h1 className="text-white text-3xl md:text-5xl font-raleway font-bold leading-tight drop-shadow-lg max-w-4xl">
            Building Excellence, Engineering Trust
          </h1>
          
          <p className="text-gray-200 font-opensans text-base leading-relaxed max-w-2xl mt-4 mb-8 drop-shadow-md">
            Your trusted partner for quality construction, civil works, interior design, and renovations across South Africa.
          </p>
      
          <a href="#contact" className="z-10">
            <button className="text-sm text-white font-opensans font-semibold bg-accent-blue hover:bg-accent-cyan transition-colors rounded-full px-10 py-3 shadow-xl transform hover:scale-105">
              Request Free Quote
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;