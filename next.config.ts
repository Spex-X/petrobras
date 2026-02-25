import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  trailingSlash: true,
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
