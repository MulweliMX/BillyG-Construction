import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <section className="absolute left-0 right-0 -top-20 md:-top-10">
      <form 
        action="https://formcarry.com/s/u9MzFrv3nEa" 
        method="POST" 
        acceptCharset="UTF-8"
        className="text-black dark:text-white text-center bg-white dark:bg-primary-testimonials border border-gray-800 dark:border-gray-700 rounded-md flex flex-col items-center gap-6 mx-4 md:mx-96 py-10 md:py-12 px-14 md:px-16 shadow-xl transition-colors duration-300"
      >
        
        <h2 className="text-lg md:text-3xl font-semibold font-opensans">Get a Free Site Assessment Today</h2>
        <p className="text-xs md:text-sm text-wrap max-w-md dark:text-gray-300">Our team is ready to visit your site and provide a no-obligation estimate. Let’s build something great together.</p>
        
        <div className="flex flex-col md:flex-row items-center gap-6 w-full">
          <input
            type="tel"
            name="contact_number"
            required
            placeholder="Enter your Number"
            className="w-full md:w-auto placeholder:text-sm py-2 bg-gray-800 dark:bg-primary-intro border-gray-800 px-12 md:px-16 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          
          <button
            type="submit"
            className="text-xs text-white font-opensans font-semibold bg-gray-800 hover:bg-gray-600 dark:bg-accent-blue dark:hover:bg-accent-cyan transition-colors rounded-full px-20 md:px-8 py-4 z-10 w-full md:w-auto">
            Request Call Back
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;