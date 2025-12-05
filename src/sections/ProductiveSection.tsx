import React from 'react';

interface ProductiveSectionProps {
  onSeeWorkClick: () => void;
}

const ProductiveSection: React.FC<ProductiveSectionProps> = ({ onSeeWorkClick }) => {
  return (
    <section className="pt-40 pb-40 bg-white">
      <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto px-8 md:px-12 gap-12">
        <img 
          src="./public/images/illustration-stay-productive.png" 
          alt="stay-productive"
          className="max-w-xs md:max-w-xl w-full"
        />
        <div className="text-black space-y-4">
          <h2 className="font-raleway text-2xl md:text-4xl font-semibold leading-snug md:mr-24">
            Efficient Project Delivery, Every Time
          </h2>
          <p className="font-opensans text-sm">
            With decades of experience and dedicated professionals, Billy G ensures every project is delivered on time and to your expectations.
          </p>
          <p className="font-opensans text-sm">
            We keep you informed and involved from start to finish — from blueprint to completion.
          </p>
          <button
            onClick={onSeeWorkClick}
            className="flex items-center gap-2 font-opensans text-xs md:text-sm text-accent-cyan border-b border-accent-cyan pb-1 hover:text-accent-blue hover:border-accent-blue transition-colors"
          >
            See Our Work
            <img src="./public/images/icon-arrow.svg" alt="arrow" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductiveSection;