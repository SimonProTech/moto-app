import type { NextConfig } from "next";
const env = process.env.NODE_ENV;

const nextConfig: NextConfig = {
  async redirects() {
    if (env === "production") {
      return [
        {
          source: "/",
          destination: "/coming-soon",
          permanent: false,
        },
        {
          source: "/coming-soon/:slug+",
          destination: "/coming-soon",
          permanent: false,
        },
      ];
    }
    return [];
  },
  /* config options here */
};

export default nextConfig;
