/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
  i18n: {
    defaultLocale: "ru",
    locales: ["uz", "ru"],
    localeDetection: false
  },
}

module.exports = nextConfig
