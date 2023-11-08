/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
    loader: 'cloudinary',
    path: `https://res.cloudinary.com/ddsesfqz8/image/upload`,
  },
}

module.exports = nextConfig

