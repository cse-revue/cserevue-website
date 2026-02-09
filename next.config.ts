import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",  // <=== enables static exports
  basePath: '/home/user/cserevue-website',
  assetPrefix: '/home/user/cserevue-website/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
