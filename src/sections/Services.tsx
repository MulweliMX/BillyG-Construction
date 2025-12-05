import React from 'react';
import { services } from '../data/content';

const ServiceCard: React.FC<{ icon: string, title: string, description: string }> = ({ icon, title, description }) => (
  <div className="space-y-6">
    <img src={icon} alt={title} className="mx-auto w-16 h-16" />
    <div className="text-black text-center mx-8 md:mx-12 space-y-2">
      <h3 className="text-xl font-raleway font-semibold">{title}</h3>
      <p className="text-sm font-opensans">{description}</p>
    </div>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="bg-white py-16">
      <div className="grid md:grid-cols-2 gap-y-16 md:gap-y-24 max-w-7xl mx-auto px-6">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;