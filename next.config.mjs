/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: false,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
