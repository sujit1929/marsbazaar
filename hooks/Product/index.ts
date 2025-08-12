import { useQuery } from "@tanstack/react-query";
import { getSponsoredProducts } from "@/Services/Products/ProductService";

export const useGetSponsoredProducts = () => {
    return useQuery({
        queryKey: ["sponsored-products"],
        queryFn: getSponsoredProducts,
    });

}

