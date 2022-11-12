/** @type {import('next').NextConfig} */
const nextConfig = {
  //reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: '/venarus',
  basePath: '/venarus',
  //swcMinify: true,
};

module.exports = nextConfig;
