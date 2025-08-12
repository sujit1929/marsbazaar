import { BASE_URL } from "@/app/Api/Api";

export const getSponsoredProducts = async () => {
    const response = await fetch(`${BASE_URL}/api/products/get-all-sponsor-products`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "x-mars-bazaar-key": "8f2b6a6e3e1c4c2f9a2b37b0e8e0f57e13f9e92b5d9e4a5d74b07f8af35b2f4e"
        }
    });
    return response.json();
};
