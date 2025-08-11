'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation,  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

const images = [
  '/crousel/1.jpeg',
  '/crousel/2.jpeg',
  '/crousel/3.jpeg',
];

//Hello WOrld


export default function MobileCarousel() {
  return (
    <div className="w-full  h-[60vh] md:hidden block   justify-center items-center bg-gray-100">
      <Swiper
        modules={[Autoplay, Navigation, ]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="w-full h-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full flex justify-center items-center bg-white shadow-lg rounded-lg overflow-hidden">
              <Image 
                src={src} 
                alt={`Slide ${index + 1}`} 
                layout="fill" 
                objectFit="cover" 
                className="md:object-contain object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
