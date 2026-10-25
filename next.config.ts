import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export to `out/` for Firebase Hosting
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
