// import type { NextConfig } from "next";
//
// const nextConfig: NextConfig = {
//   output: "export",
//   eslint: { ignoreDuringBuilds: true },
//   images: { unoptimized: true },
// };
//
// export default nextConfig;


import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // Enables static export
  eslint: { ignoreDuringBuilds: true },  // Keeps your existing ESLint setting
  images: { unoptimized: true },  // Ensures images work in static export

  // ✅ Fix for GitHub Pages (adjusts asset paths)
  basePath: "/SayMore-Web",  // Ensures correct routing on GitHub Pages
  assetPrefix: "/SayMore-Web/",  // Ensures styles and scripts load correctly
  trailingSlash: true,  // Ensures proper linking for static exports
};

export default nextConfig;