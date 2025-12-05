import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { heroCarouselImages } from '../data/content';

const HeroCarousel: React.FC = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden rounded-xl shadow-2xl group">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 3000, // Changed from 4000ms to 3000ms
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-full"
      >
        {heroCarouselImages.map((src, index) => (
          <SwiperSlide key={index}>
            <img 
              src={src} 
              alt={`Construction Project ${index + 1}`} 
              // Continuous subtle scale animation (removed group-hover dependency)
              className="w-full h-full object-cover transition-transform duration-[3000ms] ease-linear scale-[1.02] hover:scale-[1.05]" 
            />
            {/* Overlay for better text readability and subtle effect */}
            <div className="absolute inset-0 bg-black opacity-30 transition-opacity duration-500"></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroCarousel;