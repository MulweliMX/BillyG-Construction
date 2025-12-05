import React from 'react';
import ContactForm from './ContactForm';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 relative text-white">
      
      {/* Contact Form positioned absolutely */}
      <ContactForm />

      <div className="text-white font-opensans text-sm max-w-7xl mx-auto pt-60 pb-12 md:pt-46 md:pb-24 flex flex-col px-6">
        <img src="./public/images/logobxfinal.png" alt="logo" className="w-28 md:w-36 mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">

          {/* Location Info */}
          <div className="flex gap-4 col-span-1 md:col-span-1">
            <img src="./public/images/icon-location.svg" alt="location" className="w-3 h-4 mt-1 flex-shrink-0" />
            <div className="space-y-2 text-sm">
              <p className="font-semibold mb-1">Our Locations:</p>
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
              <p className="mt-3 text-xs">We Serve Gauteng, Limpopo and beyond — with on-site and remote construction services.</p>
            </div>
          </div>
          
          {/* Contact Details */}
          <div className="flex flex-col gap-4 col-span-1 md:col-span-1">
            <div className="flex gap-4 items-center">
              <img src="./public/images/icon-phone.svg" alt="phone" className="w-4 h-4 flex-shrink-0" />
              <p>+27 65 905 0192</p>
            </div>

            <div className="flex gap-4 items-center">
              <img src="./public/images/icon-phone.svg" alt="phone" className="w-4 h-4 flex-shrink-0" />
              <p>+27 81 016 0749</p>
            </div>

            <div className="flex gap-4 items-center">
              <img src="./public/images/icon-email.svg" alt="email" className="w-4 h-4 flex-shrink-0" />
              <p>info@billygtradings.co.za</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex gap-10 col-span-1 md:col-span-1">
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-accent-cyan transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-accent-cyan transition-colors">Projects</a></li>
              <li><a href="#" className="hover:text-accent-cyan transition-colors">News</a></li>
            </ul>

            <ul className="space-y-4">
              <li><a href="#" className="hover:text-accent-cyan transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-accent-cyan transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-accent-cyan transition-colors">Privacy</a></li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 self-start col-span-1 md:col-span-1 md:justify-end">
            <a href="#" aria-label="Facebook" className="p-2 border rounded-full hover:border-accent-cyan transition-colors">
              <img src="./public/images/icon-facebook.svg" alt="facebook" className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Twitter" className="p-2 border rounded-full hover:border-accent-cyan transition-colors">
              <img src="./public/images/icon-twitter.svg" alt="twitter" className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Instagram" className="p-2 border rounded-full hover:border-accent-cyan transition-colors">
              <img src="./public/images/icon-instagram.svg" alt="instagram" className="w-4 h-4" />
            </a>
          </div>
        </div>
        <p className="text-center text-xs mt-10 text-gray-400">© 2024 Billy G Tradings. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;