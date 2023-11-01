/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["ik.imagekit.io"],
    unoptimized: true
  },
}

module.exports = nextConfig
