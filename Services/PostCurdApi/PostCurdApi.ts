// const API_URL = process.env.NEXT_PUBLIC_API_URL;

import { BASE_URL } from "@/app/Api/Api";


export default async function fetchPosts() {
    try {
        const res = await fetch(`${BASE_URL}/post`);
        // const res = await fetch("/posts.json");
        if (!res.ok) {
            throw new Error('Failed to fetch posts');
        }
        return await res.json();
    } catch (error) {
        throw error;
    }
}

