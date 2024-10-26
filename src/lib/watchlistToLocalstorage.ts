import { Movie } from '@/types/Movie';
import { LocalStorage } from './localstorage';
import { isBrowser } from '@/constants/browser';

const wlStore = new LocalStorage('watchlist');

export const addToWatchlist = (movie: Movie) => {
    if (isBrowser) {
        const watchlist = wlStore.get();
        watchlist.push(movie);
        wlStore.set(watchlist);
    }
};

export const getWatchlist = () => {
    if (isBrowser) {
        return wlStore.get();
    } else {
        return [];
    }
};

export const removeFromWatchlist = (movieID: number) => {
    if (isBrowser) {
        const watchlist = wlStore.get();
        const newWatchlist = watchlist.filter((movie: Movie) => movie.id !== movieID);
        wlStore.set(newWatchlist);
    }
};
