import React from 'react';
import ProcessAccordion from '../components/ProcessAccordion';

const AboutUs: React.FC = () => {
  return (
    <section className="pt-20 pb-20 bg-white dark:bg-primary-intro transition-colors duration-300" id="about-us">
      <div className="flex flex-col md:flex-row items-start max-w-7xl mx-auto px-8 md:px-12 gap-12">
        
        {/* Left Column: Image and Main Text */}
        <div className="flex flex-col gap-8 w-full md:w-1/2">
          <img 
            src="https://res.cloudinary.com/dqsh3hnnt/image/upload/v1764961252/illustration-stay-productive_hvtf11.png" 
            alt="stay-productive"
            className="max-w-xs md:max-w-xl w-full mx-auto"
          />
          <div className="text-black dark:text-white space-y-4 transition-colors duration-300">
            <h2 className="font-raleway text-2xl md:text-4xl font-semibold leading-snug">
              Efficient Project Delivery, Every Time
            </h2>
            <p className="font-opensans text-sm dark:text-gray-300">
              With decades of experience and dedicated professionals, Billy G ensures every project is delivered on time and to your expectations.
            </p>
            <p className="font-opensans text-sm dark:text-gray-300">
              We keep you informed and involved from start to finish — from blueprint to completion.
            </p>
            <a 
              href="#our-work" 
              className="flex items-center gap-2 font-opensans text-xs md:text-sm text-accent-cyan border-b border-accent-cyan pb-1 hover:text-accent-blue hover:border-accent-blue transition-colors w-fit"
            >
              View Our Portfolio
              <img src="./public/images/icon-arrow.svg" alt="arrow" className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Process View */}
        <div className="w-full md:w-1/2">
          <ProcessAccordion />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;