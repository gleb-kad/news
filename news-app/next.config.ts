import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

module.exports = {
  devIndicators: {
    autoPrerender: false,
  },
  serverRuntimeConfig: {
    host: '0.0.0.0',
  },
};