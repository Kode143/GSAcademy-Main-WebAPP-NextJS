// next.config.mjs
const nextConfig = {
  optimizeCss: false, 
  enableBabelRuntime: true, 
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**/*',
      },
    ],
  },
};

export default nextConfig;
