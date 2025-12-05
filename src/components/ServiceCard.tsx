import React from 'react';
import * as LucideIcons from 'lucide-react';

interface ServiceCardProps {
  iconName: keyof typeof LucideIcons;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ iconName, title, description }) => {
  const IconComponent = LucideIcons[iconName];

  if (!IconComponent) {
    console.error(`Icon not found for name: ${iconName}`);
    return null;
  }

  return (
    <div className="
      bg-white p-8 rounded-lg shadow-lg 
      border border-gray-100 
      transition-all duration-300 
      hover:shadow-2xl hover:border-gray-300 
      transform hover:-translate-y-1
      cursor-pointer
    ">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="p-3 rounded-full bg-gray-800 text-white transition-colors duration-300 group-hover:bg-accent-cyan">
          <IconComponent className="w-8 h-8" />
        </div>
        
        <h3 className="text-xl font-raleway font-semibold text-gray-900">{title}</h3>
        <p className="text-sm font-opensans text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;