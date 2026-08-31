import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp"],
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  async rewrites() {
    return [
      {
        source: "/tc-csl-k8m3x7p2q9n4",
        destination: "/tc-csl-k8m3x7p2q9n4/index.html",
      },
    ];
  },
};

export default nextConfig;
