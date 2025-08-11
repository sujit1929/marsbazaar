"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const images = [
    "/crousel/Ac.webp",
    "/crousel/bedsheet1.webp",
    "/crousel/home2.webp",
    "/crousel/homestorage1.webp",
    "/crousel/light1.avif",
    "/crousel/Refrigerator.webp",
    "/crousel/vases.webp",
    "/crousel/washing machine.avif",
];

const ImageSlider = () => {
    return (
        <div className="bg-white h-full flex flex-col shadow-lg">
            <div className="p-6  flex-grow">
                <div className="mb-4">
                    <h2 className="text-xl font-bold">Sign in for your best experience</h2>
                </div>
                <Link href="/auth/login" className="text-blue-600 hover:underline text-sm block mb-4">
                    <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black">
                        Sign in securely
                    </Button>
                </Link>
                <div className=" pt-3 px-4">
                    <Swiper
                        modules={[Autoplay, Navigation]}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        loop
                        className="w-full"
                    >
                        {images.map((src, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative w-full h-[28vh]"> {/* Fixed height container */}
                                    <Image
                                        src={src}
                                        alt={`Slide ${index + 1}`}
                                        fill
                                        className="object-cover "
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {/* Swiper Image Slider at the Bottom */}

        </div>
    );
};

export default ImageSlider;
