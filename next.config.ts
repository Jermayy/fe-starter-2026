/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/entries',
        permanent: true, 
      },
    ];
  },
};

module.exports = nextConfig;
