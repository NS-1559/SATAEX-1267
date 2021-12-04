/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'vi', 'jp'],
    defaultLocale: 'en',
    localeDetection: true,
  },
  images: {
    domains: ['www.coingecko.com', 'assets.coingecko.com'],
  },
};
