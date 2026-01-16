/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "www.menucool.com",
        port: "",
        search: "",
      },
    ],
  },
};

export default nextConfig;
