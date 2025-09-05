/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cmgperu.com',
          port: '',
          pathname: '/wp-content/uploads/**',
        },
        {
          protocol: 'https',
          hostname: 'img.freepik.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'media.istockphoto.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'via.placeholder.com',
          port: '',
          pathname: '/**',
        },
      ],
      domains: ['cmgperu.com', 'media.istockphoto.com', 'via.placeholder.com'], // puedes mantenerlo junto a remotePatterns
    },
  };
  
  module.exports = nextConfig;
  