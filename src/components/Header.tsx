import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 border-b border-gray-200">
      <div className="flex items-center justify-between max-w-7xl mx-auto p-8 pt-10 md:pt-14 px-6">
        <img src="./public/images/logobxfinal.png" alt="Billy G Logo" className="w-20 md:w-28" />
        <nav>
          <ul className="flex gap-4 md:gap-12 text-white text-sm font-opensans">
            <li><a href="#contact" className="hover:underline transition-colors">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;