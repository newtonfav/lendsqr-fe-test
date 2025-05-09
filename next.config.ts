import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    // implementation: "sass-embedded",
    api: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
  productionBrowserSourceMaps: true,
};

export default nextConfig;
