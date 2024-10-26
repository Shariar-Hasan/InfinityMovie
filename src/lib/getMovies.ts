'use server';
import { TMDB_BASE_API } from '@/constants/baseApi';

export const fetchPopularMovies = async (page: number) => {
    try {
        const res = await fetch(`${TMDB_BASE_API}/movie/popular?api_key=${process.env.TMDB_API_KEY}&page=${page}`);
        return await res.json();
    } catch (error) {
        return null;
    }
};

export const fetchMovieDetails = async (id: number) => {
    try {
        const res = await fetch(`${TMDB_BASE_API}/movie/${id}?api_key=${process.env.TMDB_API_KEY}`, {
            cache: 'force-cache',
        });
        return await res.json();
    } catch (error) {
        return null;
    }
};

export const fetchMovieCasts = async (id: number) => {
    try {
        const res = await fetch(`${TMDB_BASE_API}/movie/${id}/credits?api_key=${process.env.TMDB_API_KEY}`, {
            cache: 'force-cache',
        });
        return await res.json();
    } catch (error) {
        return null;
    }
};

export const fetchMovieRecommendations = async (id: number) => {
    try {
        const res = await fetch(`${TMDB_BASE_API}/movie/${id}/recommendations?api_key=${process.env.TMDB_API_KEY}`, {
            cache: 'force-cache',
        });
        return await res.json();
    } catch (error) {
        return null;
    }
};

export const fetchMovieSearch = async (query: string) => {
    try {
        const res = await fetch(`${TMDB_BASE_API}/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${encodeURI(query)}`, {
            cache: 'force-cache',
        });
        return await res.json();
    } catch (error) {
        return null;
    }
};
