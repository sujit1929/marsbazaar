"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

const slides = [
  { image: "/crousel/4.jpg" },
  { image: "/crousel/5.jpg" },
  { image: "/crousel/6.jpg" },
];

export default function HeroCarousel() {
  return (
    <div className="relative md:block hidden w-full h-[50vh] md:h-[600px]">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        effect="fade"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }}
        className="w-full h-full"
      >
        {slides.map((data, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${data.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
