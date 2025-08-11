"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import HeroCarousel from "../Hero/Hero"
import MobileCarousel from "../Hero/MobileCarousel"
import ImageSlider from "../Hero/Imageslider"
import { useQuery } from "@tanstack/react-query"
import { BASE_URL } from "@/app/Api/Api"
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, EffectFade, Navigation } from "swiper/modules";

export default function EcommerceHomepage() {
  async function GetAllProducts() {
    const response = await fetch(`${BASE_URL}api/products`);
    const data = await response.json();
    return data;
  }

  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: GetAllProducts,
  })

  console.log("products", products)
  return (
    <div className=" p-4 space-y-6 md:block hidden">
      {/* Grid layout for all sections */}
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 xl:gap-4 lg:gap-2 gap-2">
        {/* Continue shopping deals */}
        <div className="col-span-1 bg-white shadow-xl">
          <Link href="/watches">
            <Image
              src="/crousel/galaxy-watch6-safety-mo.webp"
              alt="Continue shopping"
              width={700}
              height={100}
            />
          </Link>
        </div>

        {/* Appliances for your home */}
        <div className="col-span-1 bg-white shadow-xl">
          <div className="p-6 ">
            <h2 className="text-xl font-bold mb-4">Appliances for your home | Up to 55% off</h2>
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-1">
                <Image
                  src="/crousel/Ac.webp"
                  alt="Air conditioner"
                  width={100}
                  height={100}
                />
                <p className="text-xs">Air conditioners</p>
              </div>
              <div className="space-y-1">
                <Image
                  src="/crousel/Refrigerator.webp"
                  alt="Refrigerator"
                  width={100}
                  height={100}
                />
                <p className="text-xs">Refrigerators</p>
              </div>
              <div className="space-y-1">
                <Image
                  src="/crousel/microwave.avif"
                  alt="Microwave"
                  width={100}
                  height={100}
                />
                <p className="text-xs">Microwaves</p>
              </div>
              <div className="space-y-1">
                <Image
                  src="/crousel/washing machine.avif"
                  alt="Washing machine"
                  width={100}
                  height={100}
                />
                <p className="text-xs">Washing machines</p>
              </div>
            </div>
            <Link href="#" className="text-blue-600 hover:underline text-sm block mt-4">
              See more
            </Link>
          </div>
        </div>

        {/* Revamp your home in style */}
        <div className="col-span-1 bg-white shadow-xl">
          <div className="p-6 ">
            <h2 className="text-xl font-bold mb-4">Revamp your home in style</h2>
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-1">
                <Image
                  src="/crousel/bedsheet1.webp"
                  alt="Cushion covers"
                  width={100}
                  height={100}
                />
                <p className="text-xs">Cushion covers, bedsheets & more</p>
              </div>
              <div className="space-y-1">
                <Image
                  src="/crousel/vases.webp"
                  alt="Figurines"
                  width={100}
                  height={100}
                />
                <p className="text-xs">Figurines, vases & more</p>
              </div>
              <div className="space-y-1">
                <Image
                  src="/crousel/home2.webp"
                  alt="Home storage"
                  width={100}
                  height={100}
                />
                <p className="text-xs">Home storage</p>
              </div>
              <div className="space-y-1">
                <Image
                  src="/crousel/light1.avif"
                  alt="Lighting solutions"
                  width={100}
                  height={0}
                  className=" h-[100px] bg-center bg-contain"
                />
                <p className="text-xs">Lighting solutions</p>
              </div>
            </div>
            <Link href="#" className="text-blue-600 hover:underline text-sm block mt-4">
              Explore all
            </Link>
          </div>
        </div>

        {/* Sign in section */}
        <div className="col-span-1 bg-white">
          <ImageSlider />
        </div>
      </div>


      {/* Api call */}




      {/* Featured product */}
      <div className="w-full bg-white shadow-xl">
        <div className="p-6 flex flex-col md:flex-row gap-6 items-center">
          <div className="md:w-1/3 flex justify-center">
            <Image
              src="/crousel/galaxy-watch6-safety-mo.webp"
              alt="Samsung Galaxy Watch6"
              width={300}
              height={300}
              className="rounded-md"
            />
          </div>
          <div className="md:w-2/3">
            <div className="bg-red-600 text-white inline-block px-2 py-1 text-sm mb-2">Limited time deal</div>
            <h2 className="text-lg font-medium">Samsung Galaxy Watch6 Classic LTE (47mm, Black, Stainless Steel)</h2>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-red-600 text-2xl font-bold">-51%</span>
              <span className="text-2xl font-bold">₹24,999.00</span>
            </div>
            <div className="text-sm text-gray-500">M.R.P.: ₹50,999.00</div>
            <div className="mt-2">
              <Image src="/placeholder.svg?height=20&width=60" alt="Prime" width={60} height={20} />
            </div>
            <div className="text-xs text-right text-gray-500 mt-2">Sponsored</div>
          </div>
        </div>
      </div>

      {/* Second row of categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Headphones */}
        <div className="col-span-1 bg-white shadow-xl">
          <div className="p-6 ">
            <h2 className="text-xl font-bold mb-4">Starting ₹149 | Headphones</h2>
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-1">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="boAt headphones"
                  width={100}
                  height={100}
                />
                <p className="text-xs">Starting ₹249 | boAt</p>
              </div>
              <div className="space-y-1">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="boult headphones"
                  width={100}
                  height={100}
                />
                <p className="text-xs">Starting ₹349 | boult</p>
              </div>
              <div className="space-y-1">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="noise headphones"
                  width={100}
                  height={100}
                />
                <p className="text-xs">Noise</p>
              </div>
              <div className="space-y-1">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="zebronics headphones"
                  width={100}
                  height={100}
                />
                <p className="text-xs">Zebronics</p>
              </div>
            </div>
          </div>
        </div>

        {/* Automotive essentials */}
        <div className="col-span-1 bg-white shadow-xl">
          <div className="p-6 ">
            <h2 className="text-xl font-bold mb-4">Automotive essentials | Up to 60% off</h2>
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-1">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Cleaning accessories"
                  width={100}
                  height={100}
                />
                <p className="text-xs">Cleaning accessories</p>
              </div>
              <div className="space-y-1">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Tyre & rim care"
                  width={100}
                  height={100}
                />
                <p className="text-xs">Tyre & rim care</p>
              </div>
              <div className="space-y-1">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Helmets"
                  width={100}
                  height={100}
                />
                <p className="text-xs">Helmets</p>
              </div>
              <div className="space-y-1">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Car accessories"
                  width={100}
                  height={100}
                />
                <p className="text-xs">Car accessories</p>
              </div>
            </div>
          </div>
        </div>

        {/* Amazon Brands */}
        <div className="col-span-1 bg-white shadow-xl">
          <div className="p-6 ">
            <h2 className="text-xl font-bold mb-4">Starting ₹199 | Amazon Brands & more</h2>
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-1">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Bedsheets"
                  width={100}
                  height={100}
                />
                <p className="text-xs">Starting ₹199 | Bedsheets</p>
              </div>
              <div className="space-y-1">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Curtains"
                  width={100}
                  height={100}
                />
                <p className="text-xs">Starting ₹199 | Curtains</p>
              </div>
              <div className="space-y-1">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Home products"
                  width={100}
                  height={100}
                />
                <p className="text-xs">Home products</p>
              </div>
              <div className="space-y-1">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Home decor"
                  width={100}
                  height={100}
                />
                <p className="text-xs">Home decor</p>
              </div>
            </div>
          </div>
        </div>

        {/* Styles for women */}
        <div className="col-span-1 bg-white shadow-xl">
          <div className="p-6 ">
            <h2 className="text-xl font-bold mb-4">Up to 60% off | Styles for women</h2>
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-1">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Women's Clothing"
                  width={100}
                  height={100}
                />
                <p className="text-xs">Women's Clothing</p>
              </div>
              <div className="space-y-1">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Footwear+Handbags"
                  width={100}
                  height={100}
                />
                <p className="text-xs">Footwear+Handbags</p>
              </div>
              <div className="space-y-1">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Watches"
                  width={100}
                  height={100}
                />
                <p className="text-xs">Watches</p>
              </div>
              <div className="space-y-1">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Jewelry"
                  width={100}
                  height={100}
                />
                <p className="text-xs">Jewelry</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

