/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    // nextScriptWorkers: true,
    // topLevelAwait: true

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

  }
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
