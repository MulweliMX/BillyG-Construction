import React from 'react';
import { swiperImages } from '../data/content';

interface OurWorkProps {
  onOpenModal: () => void;
}

const OurWork: React.FC<OurWorkProps> = ({ onOpenModal }) => {
  // Display a subset of images as thumbnails
  const thumbnails = swiperImages.slice(0, 6); 

  return (
    <section id="our-work" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-black text-3xl md:text-4xl font-raleway font-bold text-center mb-12">
          Our Recent Projects
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {thumbnails.map((src, index) => (
            <div 
              key={index} 
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg aspect-video"
              onClick={onOpenModal}
            >
              <img 
                src={src} 
                alt={`Project Thumbnail ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-lg font-semibold border-2 border-white px-4 py-2 rounded-full">View Gallery</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <button
            onClick={onOpenModal}
            className="text-sm text-white font-opensans font-semibold bg-gray-800 hover:bg-gray-600 transition-colors rounded-full px-12 py-3 shadow-lg"
          >
            View Full Portfolio ({swiperImages.length} Images)
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurWork;