/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    appDir: true,
    // skipTrailingSlashRedirect: true,
    // skipMiddlewareUrlNormalize: true,
    // runtime: "experimental-edge",
  },

  /* async rewrites() {
    return [
      {
        source: "/api/todos",
        destination: "http://localhost:3001/api/todos",
      },
    ];
  }, */
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    // Important: return the modified config
    return config
  },
  env: {
    THEME_IMAGE: "/assets/media/",
    THEME_JS: "http://localhost:3000/assets/",
    ACCESS_KEY_ID: "AKIAYD42WOPWQW7TKFNR",
    SECRET_ACCESS_KEY: "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",
    REGION: "ap-south-1",
    BUCKET_NAME: "mycdapp"
  },

}
module.exports = nextConfig;
/* module.exports = {
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    // Important: return the modified config
    return config
  }
}; */
