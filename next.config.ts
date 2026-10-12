import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Permite ver el servidor de desarrollo desde otra máquina de la red
  allowedDevOrigins: ['10.44.20.59'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
