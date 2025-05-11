/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
    domains: ['images.pexels.com']
  },
  webpack: (config) => {
    // Disable webpack caching to prevent chunk load errors
    config.cache = false;
    
    // Clear module cache for development
    config.module = {
      ...config.module,
      unsafeCache: false
    };
    
    // Ensure proper module resolution
    config.resolve = {
      ...config.resolve,
      fallback: {
        ...config.resolve.fallback,
        fs: false,
        path: false,
      },
    };
    
    return config;
  },
  // Disable static optimization to prevent hydration mismatches
  experimental: {
    optimizeCss: false,
    optimizePackageImports: false
  }
};

module.exports = nextConfig;