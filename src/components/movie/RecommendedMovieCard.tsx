import { getPosterUrl } from '@/lib/getUrl';
import { Movie } from '@/types/Movie';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const RecommendedMovieCard = ({ movie }: { movie: Movie }) => {
    return (
        <Link href={`/movies/${movie.id}`}>
            <div className='flex gap-2 px-3 py-2 mx-1 rounded-md delay hover:bg-primary'>
                <Image src={getPosterUrl(movie.poster_path)} alt={movie.title} className='w-2/12 h-auto aspect-auto' width={100} height={60} />
                <div className='grow'>
                    <h3 className='text-base font-medium'>{movie.title}</h3>
                    <p className='text-sm'>{movie.popularity}</p>
                    <p className='text-sm'>
                        <span>⭐</span>
                        {movie.vote_average} ({movie.vote_count})
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default RecommendedMovieCard;
