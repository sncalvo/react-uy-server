/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'secure.meetupstatic.com',
        port: '',
      }
    ]
  },
  experimental: {
    serverActions: true,
  }
}

module.exports = nextConfig
