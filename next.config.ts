import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Redirect all www to non-www (canonical)
      {
        source: '/:path*',
        has: [
          { type: 'host', value: 'www.getvysera.com' },
        ],
        destination: 'https://getvysera.com/:path*',
        permanent: true,
      },
      // Redirect /index to /
      {
        source: '/index',
        destination: '/',
        permanent: true,
      },
      // Redirect /user/mo → /pricing
      {
        source: '/user/mo',
        destination: '/pricing',
        permanent: true,
      },
      // Redirect /careers → /contact
      {
        source: '/careers',
        destination: '/contact',
        permanent: true,
      },
      // Redirect /checkout → external signup (handles soft 404)
      {
        source: '/checkout',
        destination: 'https://apps.getvysera.com/signup',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;