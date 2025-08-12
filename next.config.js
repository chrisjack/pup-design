/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for shared hosting
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
