import React, { useState } from 'react';
import { workProcessSteps } from '../data/content';
import { ChevronDown } from 'lucide-react';

const ProcessAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleStep = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-10 space-y-4">
      <h3 className="font-raleway text-xl font-semibold text-black dark:text-white mb-6">
        Our 5-Step Project Process
      </h3>
      {workProcessSteps.map((step, index) => (
        <div 
          key={index} 
          className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden transition-all duration-300 shadow-md dark:shadow-none"
        >
          {/* Header/Trigger */}
          <button
            onClick={() => toggleStep(index)}
            className={`
              flex justify-between items-center w-full p-4 text-left 
              font-opensans font-semibold text-base 
              transition-colors duration-300
              ${openIndex === index 
                ? 'bg-accent-blue text-white' 
                : 'bg-gray-50 dark:bg-primary-testimonials text-gray-900 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-primary-testimonials/80'
              }
            `}
            aria-expanded={openIndex === index}
            aria-controls={`content-${index}`}
          >
            {step.title}
            <ChevronDown 
              className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : 'rotate-0'}`} 
            />
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
              <p className="p-4 text-sm font-opensans text-gray-700 dark:text-gray-400 bg-white dark:bg-primary-intro">
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