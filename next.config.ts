import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*", // Proxy all frontend API requests starting with `/api`
        destination: "http://localhost:5000/:path*", // Map directly to backend paths
      },
    ];
  },
};

export default nextConfig;
