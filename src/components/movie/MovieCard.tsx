import { getBackdropUrl, getPosterUrl } from '@/lib/getUrl';
import { Movie } from '@/types/Movie';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const MovieCard = ({ movie }: { movie: Movie }) => {
    return (
        <Link href={`/movies/${movie.id}`}>
            <div className='relative flex flex-col rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 group h-96'>
                <div className='relative h-full overflow-hidden group-hover:opacity-30 duration-300 bg-black'>
                    <Image
                        src={getBackdropUrl(movie.backdrop_path)}
                        alt={`${movie.title} backdrop`}
                        fill
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                        className='object-cover w-full h-full'
                    />
                </div>

                <div className='flex flex-col-reverse p-4 gap-4 translate-y-0 group-hover:-translate-y-full duration-300 absolute top-full left-0'>
                    {/* <Image src={getPosterUrl(movie.poster_path)} alt={`${movie.title} poster`} width={100} height={150} className='rounded-lg shadow-lg object-cover flex-shrink-0' /> */}

                    <div className='flex flex-col flex-1'>
                        <h2 className='text-lg font-bold'>{movie.title}</h2>
                        <p className='text-sm '>Release Date: {new Date(movie.release_date).toLocaleDateString()}</p>
                        <p className='flex items-center mt-2 text-color/70 font-semibold'>
                            <span>⭐</span> {movie.vote_average} <span className='text-sm ml-1'>({movie.vote_count} votes)</span>
                        </p>

                        <p className='mt-4 text-sm text-gray-600 dark:text-gray-300 line-clamp-3'>{movie.overview}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default MovieCard;
