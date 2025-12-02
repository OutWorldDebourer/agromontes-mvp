import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/agromontes-mvp",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
