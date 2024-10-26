'use client';
import React, { useEffect, useState, useCallback, useRef } from 'react';
import { TextField, CircularProgress, Box, List, ListItem, ListItemText } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { fetchMovieSearch } from '@/lib/getMovies';
import { Movie } from '@/types/Movie';
import { FaTimes } from 'react-icons/fa';
import { getPosterUrl } from '@/lib/getUrl';
import { LiaTimesSolid } from 'react-icons/lia';
import Image from 'next/image';
import Link from 'next/link';

const SearchMovie = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const { control, watch } = useForm({ defaultValues: { search: '' } });
    const [loading, setLoading] = useState(false);
    const [deboucedSearch, setDebouncedSearch] = useState<string>('');
    const [isOpenSearchBar, setIsOpenSearchBar] = useState(false);
    const [movies, setMovies] = useState<Movie[]>([]);

    const searchQuery = watch('search');

    useEffect(() => {
        if (isOpenSearchBar && inputRef.current) {
            console.log(inputRef.current, 'firstRender');
            inputRef.current.focus();
        }
    }, [isOpenSearchBar]);

    useEffect(() => {
        const tid = setTimeout(() => {
            setDebouncedSearch(searchQuery);
        }, 700);
        console.log('searching by query', searchQuery);
        return () => clearTimeout(tid);
    }, [searchQuery]);

    useEffect(() => {
        if (deboucedSearch.length < 3) {
            return;
        }
        fetchMovies();
    }, [deboucedSearch]);
    const fetchMovies = async () => {
        setLoading(true);
        try {
            const newSearchedMovies = await fetchMovieSearch(deboucedSearch);
            console.log(newSearchedMovies, 'newSearchedMovies');
            if (!newSearchedMovies) {
                setMovies([]);
                throw new Error('Error fetching movies');
            } else {
                setMovies(newSearchedMovies.results);
            }
        } catch (error) {
            console.error('Error fetching movies:', error);
            setMovies([]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box position='relative' display='flex' flexDirection='column' alignItems='center'>
            <TextField label='Search Movies' placeholder='Search a movie 🔎' color='primary' variant='outlined' fullWidth sx={{ maxWidth: 500 }} onFocus={() => setIsOpenSearchBar(true)} />

            {/* Loading indicator */}
            {loading && <CircularProgress size={24} sx={{ position: 'absolute', top: '50%', right: '20px' }} />}

            {/* Results dropdown */}
            {
                <div className={`fixed top-0 left-0 w-full h-screen bg-secondary overflow-y-auto z-[99] p-6 delay ${isOpenSearchBar ? 'visible opacity-100' : 'invisible opacity-0'}`}>
                    <div className='flex items-center justify-center'>
                        <Controller
                            name='search'
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label='Search Movies'
                                    placeholder='Search a movie 🔎'
                                    color='primary'
                                    variant='outlined'
                                    focused
                                    fullWidth
                                    inputRef={inputRef}
                                    sx={{ maxWidth: 500 }}
                                    className='grow'
                                />
                            )}
                        />
                        <button
                            className='mx-3'
                            onClick={() => {
                                setIsOpenSearchBar(false);
                                setMovies([]);
                            }}
                        >
                            <LiaTimesSolid className='text-2xl' />
                        </button>
                    </div>
                    <div className='grid lg:grid-cols-8 md:col-span-5 sm:col-span-3 col-span-1'>
                        {movies && movies.length > 0 ? (
                            movies.map((movie) => (
                                <Link href={`/movies/${movie.id}`} key={movie.id}>
                                    <div className='p-4 group hover:scale-95 delay'>
                                        <Image src={getPosterUrl(movie.poster_path)} alt={movie.title} className='rounded-md w-full h-[200px]' width={100} height={200} />
                                        <p className='text-sm text-center pt-2 group-hover:text-brand delay'>{movie.title}</p>
                                    </div>
                                </Link>
                            ))
                        ) : deboucedSearch.length > 3 ? (
                            <div className='text-center py-5 col-span-12'>No movies found</div>
                        ) : (
                            <div className='text-center py-5 col-span-12'>Search your movie</div>
                        )}
                    </div>
                </div>
            }
        </Box>
    );
};

export default SearchMovie;
