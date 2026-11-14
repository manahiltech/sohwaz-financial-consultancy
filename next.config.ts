import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/management',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/markets',
        destination: '/',
        permanent: true,
      },
      {
        source: '/services/:slug',
        destination: '/services',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
