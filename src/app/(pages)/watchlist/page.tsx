import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getPosterUrl } from '@/lib/getUrl';
import { Movie } from '@/types/Movie';

interface WatchlistProps {
    movies: Movie[];
}

const Watchlist: React.FC<WatchlistProps> = ({ movies }) => {
    return (
        <div className='p-6 bg-gray-900 min-h-screen text-white'>
            <h1 className='text-3xl font-bold mb-8'>My Watchlist</h1>

            {/* Filter and Sort Options */}
            <div className='flex items-center justify-between mb-6'>
                <div>
                    <button className='px-4 py-2 mr-2 bg-primary  rounded-md'>All</button>
                    <button className='px-4 py-2 mr-2 bg-secondary  rounded-md'>By Rating</button>
                    <button className='px-4 py-2 bg-brand  rounded-md'>By Release Date</button>
                </div>
            </div>

            {/* Movies Grid */}
            <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
                {movies.map((movie) => (
                    <div key={movie.id} className='relative p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105'>
                        <Link href={`/movies/${movie.id}`} passHref>
                            <div className='cursor-pointer'>
                                <Image src={movie.poster_path ? getPosterUrl(movie.poster_path) : '/placeholder.jpg'} alt={movie.title} width={300} height={450} className='rounded-lg' />
                                <h2 className='mt-4 text-lg font-semibold'>{movie.title}</h2>
                                <p className='text-sm text-gray-400'>{new Date(movie.release_date).toLocaleDateString()}</p>
                                <p className=' mt-2'>Rating: {movie.vote_average}</p>
                                <p className='text-sm mt-2  line-clamp-3'>{movie.overview}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Watchlist;
