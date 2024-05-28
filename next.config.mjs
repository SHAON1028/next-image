/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: "https://api-cms-v2.adnarchive.com",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api-cms-v2.adnarchive.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
