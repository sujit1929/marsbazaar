"use client"

import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { Star, ShoppingCart, Heart, Filter, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"

interface Product {
  id: string
  name: string
  brand: string
  price: number
  originalPrice?: number
  description: string
  image: string
  rating?: number
  isNew?: boolean
  onSale?: boolean
}

export default function Watches() {
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("featured")

  async function GetAllProducts() {
    const response = await fetch("/data/electronics/watches.json")
    if (!response.ok) throw new Error("Failed to fetch")
    return response.json()
  }

  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["watches"],
    queryFn: GetAllProducts,
  })

  // Filter products based on search query
  const filteredProducts = products?.filter(
    (product: Product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Sort products based on selected option
  const sortedProducts = filteredProducts?.sort((a: Product, b: Product) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "name":
        return a.name.localeCompare(b.name)
      default:
        return 0
    }
  })

  // Render loading skeletons
  if (isLoading) {
    return (
      <div className="container mx-auto py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Smart Watches</h1>
          <div className="flex gap-2">
            <Skeleton className="h-10 w-40" />
            <Skeleton className="h-10 w-40" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array(8)
            .fill(0)
            .map((_, index) => (
              <Card key={index} className="overflow-hidden">
                <Skeleton className="h-64 w-full" />
                <CardContent className="p-4">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-1/2 mb-2" />
                  <Skeleton className="h-5 w-1/4 mb-4" />
                  <Skeleton className="h-4 w-full" />
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Skeleton className="h-10 w-full" />
                </CardFooter>
              </Card>
            ))}
        </div>
      </div>
    )
  }

  // Render error state
  if (isError) {
    return (
      <div className="container mx-auto py-16 text-center">
        <div className="max-w-md mx-auto p-6 bg-red-50 rounded-lg border border-red-200">
          <h2 className="text-xl font-semibold text-red-700 mb-2">Something went wrong</h2>
          <p className="text-red-600 mb-4">We couldn't load the products at this time. Please try again later.</p>
          <Button
            onClick={() => window.location.reload()}
            variant="outline"
            className="border-red-300 text-red-700 hover:bg-red-100"
          >
            Try Again
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8">
      {/* Header with title and filters */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <h1 className="text-3xl font-bold">Watches</h1>

        <div className="flex flex-col sm:flex-row w-full md:w-auto gap-3">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search watches..."
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full sm:w-40">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="name">Name</SelectItem>
            </SelectContent>
          </Select>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="w-full sm:w-auto">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Filter Watches</SheetTitle>
                <SheetDescription>Narrow down your search with these filters.</SheetDescription>
              </SheetHeader>
              <div className="py-4 space-y-4">
                {/* Filter options would go here */}
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Price Range</h3>
                  {/* Price range slider would go here */}
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Brands</h3>
                  {/* Brand checkboxes would go here */}
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Features</h3>
                  {/* Feature checkboxes would go here */}
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <Button className="flex-1">Apply Filters</Button>
                <Button variant="outline" className="flex-1">
                  Reset
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Product grid */}
      {sortedProducts?.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-xl font-semibold mb-2">No watches found</h2>
          <p className="text-muted-foreground mb-4">Try adjusting your search or filter criteria</p>
          <Button
            onClick={() => {
              setSearchQuery("")
              setSortBy("featured")
            }}
          >
            Clear Filters
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sortedProducts?.map((product: Product) => (
            <Card key={product.id} className="overflow-hidden group">
              <div className="relative">
                <div className="overflow-hidden h-64 bg-gray-50">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-contain p-4 transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="absolute top-2 right-2 flex flex-col gap-2">
                  <Button size="icon" variant="secondary" className="rounded-full h-8 w-8 opacity-80 hover:opacity-100">
                    <Heart className="h-4 w-4" />
                    <span className="sr-only">Add to wishlist</span>
                  </Button>
                </div>
                {product.isNew && <Badge className="absolute top-2 left-2 bg-green-600 hover:bg-green-700">New</Badge>}
                {product.onSale && <Badge className="absolute top-2 left-2 bg-red-600 hover:bg-red-700">Sale</Badge>}
              </div>

              <CardContent className="p-4">
                <div className="mb-1">
                  <p className="text-sm text-muted-foreground">{product.brand}</p>
                </div>
                <h2 className="font-semibold text-lg mb-1 line-clamp-1">{product.name}</h2>
                <div className="flex items-center mb-2">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < (product.rating || 0) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                        }`}
                      />
                    ))}
                  <span className="text-xs text-muted-foreground ml-1">({product.rating || 0})</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-bold text-lg">₹{product.price.toLocaleString()}</span>
                  {product.originalPrice && (
                    <>
                      <span className="text-muted-foreground text-sm line-through">
                        ₹{product.originalPrice.toLocaleString()}
                      </span>
                      <span className="text-green-600 text-sm font-medium">
                        {Math.round((1 - product.price / product.originalPrice) * 100)}% off
                      </span>
                    </>
                  )}
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
              </CardContent>

              <CardFooter className="p-4 pt-0">
                <Button className="w-full gap-2">
                  <ShoppingCart className="h-4 w-4" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
