import React from 'react';
import { services } from '../data/content';
import ServiceCard from '../components/ServiceCard';
import * as LucideIcons from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="bg-gray-50 dark:bg-primary-testimonials py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-black dark:text-white text-3xl md:text-4xl font-raleway font-bold text-center mb-16 transition-colors duration-300">
          Our Core Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              iconName={service.icon as keyof typeof LucideIcons} 
              title={service.title} 
              description={service.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;