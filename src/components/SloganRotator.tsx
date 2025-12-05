import React, { useState, useEffect } from 'react';
import { heroSlogans } from '../data/content';

const SloganRotator: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // 1. Start fade out
      setIsFadingOut(true); 
      
      // 2. Wait for fade out duration (500ms)
      const fadeTimeout = setTimeout(() => {
        // 3. Change content index (hidden state)
        const nextIndex = (currentIndex + 1) % heroSlogans.length;
        setCurrentIndex(nextIndex);
        
        // 4. Start fade in
        setIsFadingOut(false); 
      }, 500);

      return () => clearTimeout(fadeTimeout);
    }, 4000); // Total cycle time (4000ms)

    return () => clearInterval(interval);
  }, [currentIndex]); // Depend on currentIndex to restart the cycle for the new slogan

  return (
    <div className="min-h-10 md:min-h-12 mb-6 overflow-hidden">
      <p 
        className={`
          text-xl md:text-3xl font-raleway font-medium 
          text-accent-cyan 
          transition-all duration-500 ease-in-out drop-shadow-lg
          ${isFadingOut ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}
        `}
      >
        {heroSlogans[currentIndex]}
      </p>
    </div>
  );
};

export default SloganRotator;