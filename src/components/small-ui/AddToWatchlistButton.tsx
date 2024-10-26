'use client';
import { addToWatchlist, removeFromWatchlist } from '@/lib/watchlistActions';
import { useWatchlist } from '@/store/useWatchlist';
import { Movie } from '@/types/Movie';
import { IconButton, Tooltip } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { RxBookmarkFilled } from 'react-icons/rx';
import { toast } from 'react-toastify';

const AddToWatchlistButton = ({ movie }: { movie: Movie }) => {
    const { addToWatch, removeFromWatch, watchlist } = useWatchlist();
    const [isActive, setIsActive] = useState(false);
    const handleAddToWatchlist = async () => {
        addToWatch(movie);
        try {
            const res = await addToWatchlist(movie);
            if (res.success) {
                toast.success('Added to watchlist');
            } else {
                toast.error('Failed to add to watchlist');
                removeFromWatch(movie.id);
            }
        } catch (error) {
            toast.error('Failed to add to watchlist');
            removeFromWatch(movie.id);
        }
    };
    const handleRemoveFromWatchlist = async () => {
        try {
            const res = await removeFromWatchlist(movie.id);
            if (res.success) {
                toast.success('Removed from watchlist');
                removeFromWatch(movie.id);
            } else {
                toast.error('Failed to remove from watchlist');
                addToWatch(movie);
            }
        } catch (error) {
            toast.error('Failed to remove from watchlist');
            removeFromWatch(movie.id);
        }
    };
    useEffect(() => {
        if (watchlist) {
            console.log({
                watchlist,
                movie,
            });
            setIsActive(watchlist.some((m) => m.id === movie.id));
        }
    }, [watchlist]);
    return (
        <Tooltip title={isActive ? 'Remove from watchlist' : 'Add to watchlist'} placement='top' arrow>
            <IconButton
                onClick={(e) => {
                    e.stopPropagation();
                    if (isActive) {
                        handleRemoveFromWatchlist();
                    } else {
                        handleAddToWatchlist();
                    }
                }}
            >
                <RxBookmarkFilled className={`text-2xl ${isActive ? 'text-brand' : ''}`} />
            </IconButton>
        </Tooltip>
    );
};

export default AddToWatchlistButton;
