import React from 'react';
import ContactForm from './ContactForm';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 relative text-white">
      
      {/* Contact Form positioned absolutely */}
      <ContactForm />

      <div className="text-white font-opensans text-sm max-w-7xl mx-auto pt-60 pb-20 md:pt-46 md:pb-24 flex flex-col px-6">
        <img src="./public/images/logobxfinal.png" alt="logo" className="w-28 md:w-36 mb-8" />

        <div className="flex flex-wrap gap-y-10 gap-x-8 md:justify-between">

          {/* Location Info */}
          <div className="flex w-full md:w-1/4 gap-6">
            <img src="./public/images/icon-location.svg" alt="location" className="w-3 h-4 mt-1" />
            <div className="space-y-1 text-sm">
              <p className="font-semibold">Our Locations:</p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>
                  <a href="https://maps.app.goo.gl/S2zELbfddJqqC4Qt5" target="_blank" rel="noopener noreferrer" className="text-accent-cyan underline hover:text-accent-cyan/80 transition-colors">
                    Gp - Boskruin View Office Park
                  </a>
                </li>
                
                <li>
                  <a href="https://maps.app.goo.gl/so8A51UkvWUwmX6k6" target="_blank" rel="noopener noreferrer" className="text-accent-cyan underline hover:text-accent-cyan/80 transition-colors">
                    Limpopo - Vahlavi Complex
                  </a>
                </li>
              </ul>
              <p className="mt-2">We Serve Gauteng, Limpopo and beyond — with on-site and remote construction services.</p>
            </div>
          </div>
          
          {/* Contact Details */}
          <div className="flex flex-col gap-5">
            <div className="flex gap-6 items-center">
              <img src="./public/images/icon-phone.svg" alt="phone" className="w-4 h-4" />
              <p>+27 65 905 0192</p>
            </div>

            <div className="flex gap-6 items-center">
              <img src="./public/images/icon-phone.svg" alt="phone" className="w-4 h-4" />
              <p>+27 81 016 0749</p>
            </div>

            <div className="flex gap-6 items-center">
              <img src="./public/images/icon-email.svg" alt="email" className="w-4 h-4" />
              <p>info@billygtradings.co.za</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-10 md:flex-row">
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-accent-cyan transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-accent-cyan transition-colors">Projects</a></li>
              <li><a href="#" className="hover:text-accent-cyan transition-colors">News</a></li>
            </ul>

            <ul className="space-y-4 md:ml-12">
              <li><a href="#" className="hover:text-accent-cyan transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-accent-cyan transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-accent-cyan transition-colors">Privacy</a></li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 self-start md:self-auto">
            <a href="#" aria-label="Facebook" className="p-1 border rounded-full hover:border-accent-cyan transition-colors">
              <img src="./public/images/icon-facebook.svg" alt="facebook" className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Twitter" className="p-1 border rounded-full hover:border-accent-cyan transition-colors">
              <img src="./public/images/icon-twitter.svg" alt="twitter" className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Instagram" className="p-1 border rounded-full hover:border-accent-cyan transition-colors">
              <img src="./public/images/icon-instagram.svg" alt="instagram" className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;