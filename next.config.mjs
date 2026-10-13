/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allows hot-reloading components to stream smoothly over local network IP addresses
  // ✅ Moved to the top-level configuration object
  allowedDevOrigins: ['192.168.93.77', 'localhost:3000']
};

export default nextConfig;
