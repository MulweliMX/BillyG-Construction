import React from 'react';
import HeroCarousel from '../components/HeroCarousel';
import SloganRotator from '../components/SloganRotator';

const Hero: React.FC = () => {
  return (
    <section className="
      bg-white dark:bg-primary-intro 
      relative 
      pb-20 md:pb-40 
      transition-colors duration-300
      
      /* Curvy Background Styling */
      after:content-[''] 
      after:absolute 
      after:bottom-0 
      after:left-0 
      after:right-0 
      after:h-40 md:after:h-60 /* Height of the curve */
      after:bg-no-repeat 
      after:bg-cover 
      after:bg-center
      
      /* Mobile Curve */
      after:bg-[url('./public/images/bg-curvy-mobile.svg')]
      
      /* Desktop Curve (overrides mobile) */
      md:after:bg-[url('./public/images/bg-curvy-desktop.svg')]
    ">
      
      <div className="max-w-7xl mx-auto px-6 pt-10 relative z-10">
        
        {/* Main Content Block (Above Carousel) */}
        <div className="flex flex-col items-center justify-center text-center p-6 md:p-12 mb-10">
          
          {/* Slogan Rotator */}
          <SloganRotator />
          
          <h1 className="text-black dark:text-white text-3xl md:text-5xl font-raleway font-bold leading-tight max-w-4xl transition-colors duration-300">
            Building Excellence, Engineering Trust
          </h1>
          
          <p className="text-gray-700 dark:text-gray-300 font-opensans text-base leading-relaxed max-w-2xl mt-4 mb-8 transition-colors duration-300">
            Your trusted partner for quality construction, civil works, interior design, and renovations across South Africa.
          </p>
      
          <a href="#contact" className="z-10">
            <button className="text-sm text-white font-opensans font-semibold bg-accent-blue hover:bg-accent-cyan transition-colors rounded-full px-10 py-3 shadow-xl transform hover:scale-105">
              Request Free Quote
            </button>
          </a>
        </div>

        {/* Carousel Background (Below Content) */}
        <HeroCarousel />
      </div>
    </section>
  );
};

export default Hero;