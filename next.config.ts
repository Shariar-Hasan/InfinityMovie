import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    env: {
        TMDB_API_KEY: process.env.TMDB_API_KEY,
        INFINITY_MOVIE_BASE_URL: process.env.INFINITY_MOVIE_BASE_URL,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'image.tmdb.org',
            },
            {
                protocol: 'https',
                hostname: 'i.pravatar.cc',
            },
        ],
    },
};

export default nextConfig;
