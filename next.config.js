/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'secure-content.meetupstatic.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'secure.meetupstatic.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: '*.damiansire.com',
        port: '',
      }
    ]
  },
}

module.exports = nextConfig
