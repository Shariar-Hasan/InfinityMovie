'use client';
import React from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';
import { fetchPopularMovies } from '@/lib/getMovies';
import MovieCard from '@/components/movie/MovieCard';
import useInView from '@/hooks/useInView';
import { Skeleton } from '@mui/material';
import SearchMovie from '@/components/movie/SearchMovie';

const MoviePage = () => {
    const { fetchNextPage, hasNextPage, isFetchingNextPage, data, isFetching } = useInfiniteQuery({
        queryKey: ['movies'],
        queryFn: ({ pageParam }) => fetchPopularMovies(pageParam as number),
        initialPageParam: 1,
        getNextPageParam: (lastPage) => {
            console.log({
                lastPage,
            });
            return lastPage.page + 1;
        },
    });
    const [interSectionRef, inView] = useInView<HTMLDivElement>();

    useEffect(() => {
        if (inView) {
            fetchNextPage();
        }
    }, [inView, fetchNextPage]);
    useEffect(() => {
        console.log({ data });
    }, [data]);

    return (
        <div className='container mx-auto p-4'>
            <SearchMovie />
            <h1 className='text-3xl font-bold mb-6'>Popular Movies</h1>
            <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 -mb-[150px] overflow-hidden'>
                {data &&
                    data?.pages &&
                    data?.pages.map((page, index) => (
                        <React.Fragment key={index}>
                            {page.results.map((movie: any) => (
                                <MovieCard key={movie.id} movie={movie} />
                            ))}
                        </React.Fragment>
                    ))}
                {Array.from({
                    length: 5,
                }).map((_, i) => (
                    <Skeleton key={i} ref={i === 0 ? interSectionRef : undefined} variant='rounded' width='100%' height='400px' className='bg-primary brightness-125' />
                ))}
            </div>
        </div>
    );
};

export default MoviePage;
