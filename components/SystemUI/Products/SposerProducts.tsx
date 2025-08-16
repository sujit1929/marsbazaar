import { useGetSponsoredProducts } from '@/hooks/Product'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function SposerProducts() {
    const { data } = useGetSponsoredProducts()
    const products = data?.data || []

    const [currentIndex, setCurrentIndex] = useState(0)

    // Har 2 sec me next card show hoga
    useEffect(() => {
        if (products.length === 0) return
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % products.length)
        }, 2000)
        return () => clearInterval(interval)
    }, [products])

    return (
        <div className="w-full flex justify-center items-center">
            {products.length > 0 && (
                <div
                    key={products[currentIndex]?._id}
                    className="w-full bg-white shadow-xl rounded-xl overflow-hidden transition-all duration-700"
                >
                    <div className="p-6 flex flex-col md:flex-row gap-6 items-center">

                        <div className="md:w-1/3 flex justify-center">
                            <Image
                                src={`http://localhost:5000${products[currentIndex]?.product?.image}`}
                                alt={products[currentIndex]?.product?.name}
                                width={300}
                                height={300}
                                className="rounded-md object-contain"
                            />
                        </div>


                        <div className="md:w-2/3">
                            <div className="bg-red-600 text-white inline-block px-3 py-1 text-xs font-semibold rounded-md mb-3">
                                Limited time deal
                            </div>

                            <h2 className="text-xl font-semibold mb-2">
                                {products[currentIndex]?.product?.name}
                            </h2>


                            <p className="text-gray-600 text-sm line-clamp-3 mb-3">
                                {products[currentIndex]?.product?.description}
                            </p>

                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-red-600 text-2xl font-bold">-51%</span>
                                <span className="text-2xl font-bold">
                                    ₹{products[currentIndex]?.product?.price}
                                </span>
                            </div>

                            {products[currentIndex]?.product?.mrp && (
                                <div className="text-sm text-gray-500 mb-3">
                                    M.R.P.: ₹{products[currentIndex]?.product?.mrp}
                                </div>
                            )}

                            <div className="mt-2">
                                <Image
                                    src={`http://localhost:5000${products[currentIndex]?.product?.image}`}
                                    alt="Prime"
                                    width={60}
                                    height={20}
                                    className="object-contain"
                                />
                            </div>

                            <div className="mt-4">
                                <button
                                    onClick={() =>
                                        console.log(`Add to cart: ${products[currentIndex]?.product?._id}`)
                                    }
                                    className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded-lg shadow cursor-pointer"
                                >
                                    Add to Cart
                                </button>
                            </div>

                            <div className="text-xs text-right text-gray-500 mt-2">
                                Sponsored
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
