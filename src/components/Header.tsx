import React, { useState } from 'react';
import { navLinks } from '../data/navigation';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const ThemeIcon = theme === 'dark' ? Sun : Moon;

  return (
    <header id="home" className="bg-gray-800 dark:bg-primary-intro border-b border-gray-700 dark:border-gray-800 sticky top-0 z-30 transition-colors duration-300">
      <div className="flex items-center justify-between max-w-7xl mx-auto p-4 md:p-8 px-6">
        <img src="./public/images/logobxfinal.png" alt="Billy G Logo" className="w-16 md:w-24" />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-12">
          <ul className="flex gap-12 text-white text-sm font-opensans">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-accent-cyan transition-colors font-semibold">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          {/* Theme Toggle Button (Desktop) */}
          <button 
            onClick={toggleTheme} 
            aria-label="Toggle theme"
            className="p-2 rounded-full text-white hover:bg-gray-700 dark:hover:bg-gray-900 transition-colors"
          >
            <ThemeIcon className="w-5 h-5" />
          </button>
        </nav>

        {/* Mobile Menu Button and Toggle */}
        <div className="flex items-center md:hidden gap-4">
          {/* Theme Toggle Button (Mobile) */}
          <button 
            onClick={toggleTheme} 
            aria-label="Toggle theme"
            className="p-2 rounded-full text-white hover:bg-gray-700 transition-colors"
          >
            <ThemeIcon className="w-5 h-5" />
          </button>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            aria-label="Toggle navigation menu"
            className="text-white p-2 hover:bg-gray-700 rounded transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <nav 
        className={`md:hidden absolute w-full bg-gray-800 dark:bg-primary-intro transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col items-center gap-4 text-white text-base font-opensans">
          {navLinks.map((link) => (
            <li key={link.name} className="w-full text-center">
              <a 
                href={link.href} 
                onClick={handleLinkClick}
                className="block py-2 hover:bg-gray-700 dark:hover:bg-gray-900 transition-colors font-semibold"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;