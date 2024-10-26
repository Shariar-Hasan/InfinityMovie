'use client';
import { useWatchlist } from '@/store/useWatchlist';
import { useEffect } from 'react';

const FetchWatchList = () => {
    const { fetchWatchlist } = useWatchlist();
    useEffect(() => {
        fetchWatchlist();
    }, []);
    return null;
};

export default FetchWatchList;
