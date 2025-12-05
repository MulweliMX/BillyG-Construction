import React from 'react';
import { navLinks } from '../data/navigation';

const Header: React.FC = () => {
  return (
    <header id="home" className="bg-gray-800 border-b border-gray-200 sticky top-0 z-30">
      <div className="flex items-center justify-between max-w-7xl mx-auto p-4 md:p-8 px-6">
        <img src="./public/images/logobxfinal.png" alt="Billy G Logo" className="w-16 md:w-24" />
        <nav>
          <ul className="flex gap-4 md:gap-12 text-white text-sm font-opensans">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-accent-cyan transition-colors font-semibold">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;