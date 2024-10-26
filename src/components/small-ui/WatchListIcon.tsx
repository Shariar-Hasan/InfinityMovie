'use client';
import { useWatchlist } from '@/store/useWatchlist';
import { Badge, IconButton, Tooltip } from '@mui/material';
import { useRouter } from 'nextjs-toploader/app';
import React from 'react';
import { RxBookmarkFilled } from 'react-icons/rx';

const WatchListIcon = () => {
    const router = useRouter();
    const { watchlist } = useWatchlist();
    return (
        <Tooltip title='Watchlist' placement='bottom' arrow>
            <IconButton
                onClick={() => {
                    router.push('/watchlist');
                }}
                className='text-color'
            >
                <Badge badgeContent={watchlist.length} invisible={watchlist.length === 0} color='primary'>
                    <RxBookmarkFilled className={`text-2xl text-color`} />
                </Badge>
            </IconButton>
        </Tooltip>
    );
};

export default WatchListIcon;
