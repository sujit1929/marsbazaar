import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    domains: ["localhost"], // ✅ Allow next/image to load from localhost
  },

  async rewrites() {
    return [
      {
        source: "/api/:path*", 
        destination: "http://localhost:5000/:path*", 
      },
    ];
  },
};

export default nextConfig;
