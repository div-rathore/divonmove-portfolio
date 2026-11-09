import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.cdninstagram.com",
      },
      {
        protocol: "https",
        hostname: "instagram.com",
      },
      {
        protocol: "https",
        hostname: "foodstrong.in",
      },
      {
        protocol: "https",
        hostname: "www.thirdsociety.in",
      },
      {
        protocol: "https",
        hostname: "thirdsociety.in",
      },
      {
        protocol: "https",
        hostname: "terractive.in",
      },
      {
        protocol: "https",
        hostname: "goodflippin.com",
      },
    ],
  },
};

export default nextConfig;
