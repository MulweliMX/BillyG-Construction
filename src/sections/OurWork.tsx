import React from 'react';
import { swiperImages } from '../data/content';

interface OurWorkProps {
  onOpenModal: () => void;
}

const OurWork: React.FC<OurWorkProps> = ({ onOpenModal }) => {
  // Display a subset of images as thumbnails
  const thumbnails = swiperImages.slice(0, 6); 

  return (
    <section id="our-work" className="bg-white dark:bg-primary-intro py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-black dark:text-white text-3xl md:text-4xl font-raleway font-bold text-center mb-12 transition-colors duration-300">
          Our Recent Projects
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {thumbnails.map((src, index) => (
            <div 
              key={index} 
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-xl aspect-video"
              onClick={onOpenModal}
            >
              <img 
                src={src} 
                alt={`Project Thumbnail ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Enhanced Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold border-2 border-white px-6 py-3 rounded-full backdrop-blur-sm">View Gallery</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <button
            onClick={onOpenModal}
            className="text-sm text-white font-opensans font-semibold bg-gray-800 hover:bg-gray-600 dark:bg-accent-blue dark:hover:bg-accent-cyan transition-colors rounded-full px-12 py-3 shadow-lg"
          >
            View Full Portfolio ({swiperImages.length} Images)
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurWork;