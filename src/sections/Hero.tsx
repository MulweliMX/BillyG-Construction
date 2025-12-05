import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-white pb-20 md:pb-40 relative">
      <img 
        src="./public/images/bg-curvymxfx.svg" 
        alt="background curve" 
        className="absolute bottom-0 w-full"
      />
      
      <div className="flex flex-col items-center justify-center gap-8 max-w-7xl mx-auto px-6 pt-10">
        <img src="./public/images/logoblackfx.png" alt="intro" className="md:max-w-md" />
        
        <h1 className="text-black text-2xl text-center font-raleway font-semibold leading-snug z-10 md:text-4xl md:mx-60">
          Trusted Construction & Engineering Services Across South Africa
        </h1>
        
        <p className="text-black text-center font-opensans text-sm leading-relaxed max-w-lg px-4 z-10 md:text-base">
          Billy G Tradings is your partner in quality construction, civil works, interior design, and renovations. Reliable. Professional. Built to last.
        </p>
    
        <a href="#contact" className="z-10">
          <button className="text-sm text-white font-opensans font-semibold bg-gray-800 hover:bg-gray-600 transition-colors rounded-full px-20 py-3 md:px-12 md:py-3 shadow-lg">
            Request Call Back
          </button>
        </a>
      </div>
    </section>
  );
};

export default Hero;