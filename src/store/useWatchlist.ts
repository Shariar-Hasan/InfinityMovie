import { getWatchlist } from '@/lib/watchlistToLocalstorage';
import { Movie } from '@/types/Movie';
import { create } from 'zustand';

interface WatchState {
    watchlist: Movie[];
    fetchWatchlist: () => Promise<void>;
    addToWatch: (movie: Movie) => void;
    removeFromWatch: (movieId: number) => void;
}

export const useWatchlist = create<WatchState>((set) => ({
    watchlist: [],

    // Fetch and set the watchlist data
    fetchWatchlist: async () => {
        // const data = await getWatchlist();
        const data = getWatchlist();
        // console.log('use watchlist store', data);
        // if (!data.success) return set({ watchlist: [] });
        return set({ watchlist: data });
    },

    // Add a movie to the watchlist and update the backend
    addToWatch: async (movie: Movie) => {
        return set((state) => {
            const newWatchlist = [...state.watchlist, movie];
            return { watchlist: newWatchlist };
        });
    },

    // Remove a movie from the watchlist and update the backend
    removeFromWatch: async (movieId: number) => {
        return set((state) => {
            const newWatchlist = state.watchlist.filter((movie) => movie.id !== movieId);
            return { watchlist: newWatchlist };
        });
    },
}));
