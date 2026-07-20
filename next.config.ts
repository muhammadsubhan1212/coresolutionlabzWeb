import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp"],
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
