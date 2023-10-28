/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    path: 'https://res.cloudinary.com/ddsesfqz8/image/upload/',
    domains: [
      "res.cloudinary.com",
    ]
  }
}

module.exports = nextConfig
