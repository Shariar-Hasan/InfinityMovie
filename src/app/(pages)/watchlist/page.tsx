'use client';
import React from 'react';
import { Movie } from '@/types/Movie';
import Link from 'next/link';
import { AiOutlineDelete } from 'react-icons/ai';
import { useWatchlist } from '@/store/useWatchlist';
import { toast } from 'react-toastify';
import { removeFromWatchlist } from '@/lib/watchlistActions';
import { getPosterUrl } from '@/lib/getUrl';
import { ButtonLink } from '@/components/small-ui/Button';

const Watchlist: React.FC = () => {
    const { watchlist, removeFromWatch, addToWatch } = useWatchlist();
    const handleRemoveFromWatchlist = async (movie: Movie) => {
        try {
            removeFromWatch(movie.id);
            const res = await removeFromWatchlist(movie.id);
            if (res.success) {
                toast.success('Removed from watchlist');
            } else {
                toast.error('Failed to remove from watchlist');
                addToWatch(movie);
            }
        } catch (error) {
            toast.error('Failed to remove from watchlist');
            addToWatch(movie);
        }
    };
    return (
        <div className='min-h-screen py-10 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100'>
            <h1 className='text-4xl font-semibold text-center mb-10'>My Watchlist</h1>

            {watchlist.length > 0 ? (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 md:mx-16 lg:mx-32'>
                    {watchlist.map((movie: Movie) => (
                        <div key={movie.id} className='relative p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden'>
                            <Link href={`/movie/${movie.id}`}>
                                <img src={getPosterUrl(movie.poster_path)} alt={movie.title} className='w-full h-60 object-cover rounded-md hover:opacity-90 transition-opacity' />
                            </Link>

                            <div className='mt-4'>
                                <Link href={`/movie/${movie.id}`}>
                                    <h2 className='text-lg font-bold hover:underline'>{movie.title}</h2>
                                </Link>
                                <p className='text-sm text-gray-600 dark:text-gray-300 mt-1'>{movie.release_date}</p>
                                <p className='mt-2 text-sm line-clamp-3'>{movie.overview}</p>
                            </div>

                            <button
                                onClick={() => handleRemoveFromWatchlist(movie)}
                                className='absolute top-4 right-4 text-red-500 hover:text-red-700 transition-colors'
                                aria-label='Remove from watchlist'
                            >
                                <AiOutlineDelete size={24} />
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-center text-xl mt-20'>Your watchlist is empty.</p>
                    <ButtonLink href='/movies' varient='brand' className='rounded-sm'>
                        Discover Movies
                    </ButtonLink>
                </div>
            )}
        </div>
    );
};

export default Watchlist;
