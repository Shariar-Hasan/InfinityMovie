'use server';
import { Movie } from '@/types/Movie';
import Nextios from './nextios';
import { BASE_URL } from '@/constants/baseApi';

const fetchInstance = new Nextios(`${BASE_URL}/api/v1`);

export const addToWatchlist = async (movie: Movie) => {
    return await fetchInstance.post('/watchlist', movie);
};

export const getWatchlist = async () => {
    return await fetchInstance.get('/watchlist', {
        cache: 'no-store',
        next: {
            tags: ['watchlist'],
        },
    });
};

export const removeFromWatchlist = async (movieID: number) => {
    return await fetchInstance.delete('/watchlist', movieID);
};
