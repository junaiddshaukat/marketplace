/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "hebbkx1anhila5yf.public.blob.vercel-storage.com",
      "res.cloudinary.com",
      "mama-marketplace.nicolasgrimm.ch",
      "brandlogos.net",'images.squarespace-cdn.com'
    ],
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

export default nextConfig;
