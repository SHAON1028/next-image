/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.adobe.com",
        port: "",
        pathname: "*",
      },
    ],
  },
};

export default nextConfig;
