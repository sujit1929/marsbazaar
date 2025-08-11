'use client';
import { useEffect, useState } from "react";

export default function ProductList() {
    const [products, setProducts] = useState([]);
    const BASE_URL = "http://localhost:5000"
    // const BASE_URL = "https://mars-bazaar-backend.vercel.app"

    useEffect(() => {
        fetch(`${BASE_URL}/api/products/get-all-products`)
            .then(res => res.json())
            .then(result => {
                if (result.status) {
                    setProducts(result.data);
                }
            })
            .catch(err => console.error("Error fetching products:", err));
    }, []);

    return (
        <div>
            <h1>Product List</h1>
            {products.map((product: any) => (
                <div key={product._id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>Price: ₹{product.price}</p>
                    <p>Category: {product.category} / {product.subcategory}</p>
                    <p>Seller: {product.user.name} ({product.user.email})</p>
                    <img src={`http://localhost:5000${product.image}`} alt={product.name} width="200" />
                </div>
            ))}
        </div>
    );
}
