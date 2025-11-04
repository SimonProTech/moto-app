import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
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
  },
  /* config options here */
};

export default nextConfig;
