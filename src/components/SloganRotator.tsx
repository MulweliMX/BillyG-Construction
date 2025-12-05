import React, { useState, useEffect } from 'react';
import { heroSlogans } from '../data/content';

const SloganRotator: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true); // Start fade out
      
      // Wait for fade out (500ms) then change content and fade in
      const fadeTimeout = setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % heroSlogans.length);
        setIsFading(false); // Start fade in
      }, 500);

      return () => clearTimeout(fadeTimeout);
    }, 4000); // Change slogan every 4 seconds (4000ms)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-10 md:h-12 mb-4 overflow-hidden">
      <p 
        className={`
          text-xl md:text-3xl font-raleway font-medium 
          text-accent-cyan 
          transition-opacity duration-500 ease-in-out drop-shadow-lg
          ${isFading ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}
        `}
      >
        {heroSlogans[currentIndex]}
      </p>
    </div>
  );
};

export default SloganRotator;