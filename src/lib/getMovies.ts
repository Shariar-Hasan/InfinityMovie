'use server';
import { TMDB_BASE_API } from '@/constants/baseApi';
import Nextios from './nextios';

const fetchInstance = new Nextios(TMDB_BASE_API);

export const fetchPopularMovies = async (page: number) => {
    try {
        return await fetchInstance.get(`/movie/popular?api_key=${process.env.TMDB_API_KEY}&page=${page}`, {
            cache: 'force-cache',
        });
    } catch (error) {
        return null;
    }
};

export const fetchMovieDetails = async (id: number) => {
    try {
        return await fetchInstance.get(`/movie/${id}?api_key=${process.env.TMDB_API_KEY}`, {
            cache: 'force-cache',
        });
    } catch (error) {
        return null;
    }
};

export const fetchMovieCasts = async (id: number) => {
    try {
        return await fetchInstance.get(`/movie/${id}/credits?api_key=${process.env.TMDB_API_KEY}`, {
            cache: 'force-cache',
        });
    } catch (error) {
        return null;
    }
};

export const fetchMovieRecommendations = async (id: number) => {
    try {
        return await fetchInstance.get(`/movie/${id}/recommendations?api_key=${process.env.TMDB_API_KEY}`, {
            cache: 'force-cache',
        });
    } catch (error) {
        return null;
    }
};

export const fetchMovieSearch = async (query: string) => {
    try {
        return await fetchInstance.get(`/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${encodeURI(query)}`, {
            cache: 'force-cache',
        });
    } catch (error) {
        return null;
    }
};
