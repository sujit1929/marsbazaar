"use client";
import fetchMapping from "@/Services/Mappping/Service"
import { useQuery } from "@tanstack/react-query"

export default function Mapping() {

    const { data: MappingData, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: fetchMapping
    })

    console.log("MappingData", MappingData)
    return (
        <>
           {MappingData?.categories.map((category: any) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
    <ul key={category.id} className="list-none p-4 border rounded-lg shadow-md bg-white">
      <li className="flex gap-3 items-center mb-4">
        <h1 className="text-lg font-bold">{category.id}</h1>
        <h1 className="text-lg">{category.name}</h1>
      </li>
      <div className="grid gap-4">
        {category?.products?.map((product: any) => (
          <li key={product.product_id} className="p-4 bg-gray-50 rounded-lg shadow">
            <h1 className="text-md font-bold">{product.product_id}</h1>
            <h1 className="text-md">{product.name}</h1>
            <ul className="list-none pl-4 mt-2">
              <li className="mb-2">
                <span className="font-bold">Brand:</span> {product?.details?.brand}
              </li>
              <li className="mb-2">
                <span className="font-bold">Price:</span> {product?.details?.price}
              </li>
              <li className="mb-2">
                <span className="font-bold">Capacity:</span> {product?.details?.specs?.capacity}
              </li>
              <li className="mb-2">
                <span className="font-bold">Processor:</span> {product?.details?.specs?.processor}
              </li>
              <li className="mb-2">
                <span className="font-bold">Power:</span> {product?.details?.specs?.power}
              </li>
            </ul>
          </li>
        ))}
      </div>
    </ul>
  </div>
))}
        </>
    )
}
