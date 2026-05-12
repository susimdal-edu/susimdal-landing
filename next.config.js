/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Local screenshots are served from /public; no remote loaders needed.
    unoptimized: false,
  },
};

module.exports = nextConfig;
