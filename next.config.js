/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    basePath: '/coutisse',
    assetPrefix: '/coutisse/',
    // assetPrefix: '/',
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;
