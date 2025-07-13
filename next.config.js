/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: true,
    },
  },
  webpack(config) {
    // Configure SVG handling with @svgr/webpack
    config.module.rules.push({
      test: /\.svg$/i,
      include: path.resolve(__dirname, "assets/svg"),
      use: ["@svgr/webpack"],
    });

    return config;
  },
  // Configuration for static export
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
