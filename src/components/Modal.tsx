import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { swiperImages } from '../data/content';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div 
      id="workModal" 
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4"
      ref={modalRef}
    >
      <div id="modalBackdrop" className="absolute inset-0" onClick={onClose}></div>
      
      {/* Modal Content */}
      <div className="relative z-10 max-w-3xl w-full">
        
        <div className="bg-white p-4 rounded-lg w-full relative">
          
          {/* Close Icon */}
          <button 
            onClick={onClose} 
            className="absolute top-2 right-4 text-3xl font-bold text-gray-700 hover:text-gray-900 z-20 transition-colors"
            aria-label="Close Modal"
          >
            &times;
          </button>

          {/* Swiper */}
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            className="mySwiper"
          >
            {swiperImages.map((src, index) => (
              <SwiperSlide key={index}>
                <img 
                  src={src} 
                  alt={`Work Image ${index + 1}`} 
                  className="w-full h-auto max-h-[80vh] object-contain rounded-md" 
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Modal;