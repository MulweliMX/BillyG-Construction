import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Services from './sections/Services';
import AboutUs from './sections/AboutUs';
import OurWork from './sections/OurWork';
import Modal from './components/Modal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Theme state management: Initialize state once from localStorage or default to 'light'
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
      return savedTheme || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    if (theme === 'dark') {
      root.classList.add('dark');
      // Apply dark body background/text
      body.classList.remove('bg-white', 'text-black');
      body.classList.add('bg-primary-intro', 'text-white');
    } else {
      root.classList.remove('dark');
      // Apply light body background/text
      body.classList.remove('bg-primary-intro', 'text-white');
      body.classList.add('bg-white', 'text-black');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="flex-grow pt-24 md:pt-32">
        <Hero />
        <Services />
        <AboutUs />
        <OurWork onOpenModal={openModal} />
      </main>
      <Footer />
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;