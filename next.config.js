/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    nextScriptWorkers: true,
  },
  env: {
    GA_MEASUREMENT_ID: process.env.GA_MEASUREMENT_ID,
  },
};

module.exports = nextConfig;
