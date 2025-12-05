import React, { useState } from 'react';
import { workProcessSteps } from '../data/content';

const ProcessAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleStep = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-10 space-y-4">
      <h3 className="font-raleway text-xl font-semibold text-black dark:text-white mb-6">
        Our Dynamic 5-Step Project Framework
      </h3>
      {workProcessSteps.map((step, index) => (
        <div 
          key={index} 
          className={`
            rounded-xl overflow-hidden transition-all duration-300 
            ${openIndex === index 
              ? 'shadow-2xl border border-accent-blue dark:border-accent-cyan' 
              : 'shadow-lg border border-gray-200 dark:border-primary-testimonials hover:shadow-xl'
            }
          `}
        >
          {/* Header/Trigger */}
          <button
            onClick={() => toggleStep(index)}
            className={`
              flex justify-between items-center w-full p-5 text-left 
              font-opensans font-semibold text-base 
              transition-colors duration-300
              ${openIndex === index 
                ? 'bg-accent-blue text-white' 
                : 'bg-white dark:bg-primary-testimonials text-gray-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-primary-testimonials/90'
              }
            `}
            aria-expanded={openIndex === index}
            aria-controls={`content-${index}`}
          >
            {step.title}
            
            {/* View More/Less Button */}
            <span className={`
                text-xs font-semibold px-4 py-1.5 rounded-full 
                transition-colors duration-300 
                ${openIndex === index 
                    ? 'bg-white text-accent-blue hover:bg-gray-100' 
                    : 'bg-white dark:bg-accent-cyan text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-accent-blue'
                }
            `}>
              {openIndex === index ? 'View Less' : 'View Details'}
            </span>
          </button>

          {/* Content */}
          <div
            id={`content-${index}`}
            className={`
              grid transition-all duration-500 ease-in-out 
              ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}
            `}
          >
            <div className="overflow-hidden">
              <p className="p-5 text-sm font-opensans text-gray-700 dark:text-gray-400 bg-gray-50 dark:bg-primary-intro">
                {step.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProcessAccordion;