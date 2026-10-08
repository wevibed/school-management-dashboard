/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [{ hostname: "images.pexels.com" }],
  },
};

export default nextConfig;