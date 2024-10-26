import RecommendedMovieCard from '@/components/movie/RecommendedMovieCard';
import Frame from '@/components/shared/Frame';
import Chip from '@/components/small-ui/Chip';
import SubHeading from '@/components/small-ui/SubHeading';
import { fetchMovieCasts, fetchMovieDetails, fetchMovieRecommendations, fetchPopularMovies } from '@/lib/getMovies';
import { getBackdropUrl, getPosterUrl } from '@/lib/getUrl';
import { Cast } from '@/types/Cast';
import { Movie } from '@/types/Movie';
import Image from 'next/image';
import CastCard from '@/components/movie/CastCard';
import { Metadata, ResolvingMetadata } from 'next';
interface MovieDetailsPageProps {
    params: { id: string };
}
export async function generateMetadata({ params }: MovieDetailsPageProps, parent: ResolvingMetadata): Promise<Metadata> {
    const id = (await params).id;

    const movie: Movie = await fetchMovieDetails(+id);

    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || [];

    return {
        title: movie.title,
        openGraph: {
            images: [getPosterUrl(movie.poster_path), getBackdropUrl(movie.backdrop_path), ...previousImages],
        },
        description: movie.overview,
        keywords: ['movie', 'film', 'cinema', 'popular', 'trending', 'cast', 'recommendations', 'genres'],
    };
}
export async function generateStaticParams() {
    const moveis = await fetchPopularMovies(1);

    return await moveis.results.map((movie: Movie) => ({
        id: movie.id.toString(),
    }));
}
const MovieDetailsPage = async ({ params }: MovieDetailsPageProps) => {
    const { id } = await params;

    const movie: Movie = await fetchMovieDetails(+id);
    const {
        cast,
    }: {
        cast: Cast[];
    } = await fetchMovieCasts(+id);
    const {
        results: recommendedMovies,
    }: {
        results: Movie[];
    } = await fetchMovieRecommendations(+id);

    return (
        <div className='flex flex-col min-h-screen bg-secondary'>
            <div className='w-full p-4'>
                <div className='relative h-[700px]'>
                    <Image src={getBackdropUrl(movie.backdrop_path)} alt={`${movie.title} backdrop`} fill objectFit='cover' className=' blur-md' />

                    <Image
                        src={getPosterUrl(movie.poster_path)}
                        alt={`${movie.title} Poster`}
                        className=' md:max-h-96 max-h-60 h-full absolute -bottom-[50px] left-1/2 translate-x-[-50%] '
                        width={224}
                        height={336}
                    />
                </div>

                <Frame>
                    <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 mt-[55px] gap-5'>
                        <div className='col-span-1 sm:col-span-2 md:col-span-3'>
                            <div className='sticky top-[80px]'>
                                <div>
                                    <SubHeading>Overview</SubHeading>
                                    <div className='mt-6'>
                                        <h1 className='text-3xl font-bold'>{movie.title}</h1>
                                        <p className='text-sm text-gray-400'>{movie.release_date}</p>
                                        <p className='mt-4 text-lg'>{movie.overview}</p>
                                        <p className='mt-2 text-sm text-yellow-500'>
                                            Rating: {movie.vote_average} / 10 ({movie.vote_count} votes)
                                        </p>
                                    </div>

                                    <div className='mt-8 space-y-4'>
                                        <p className='text-lg'>
                                            <span className='font-semibold'>Language:</span> {movie.original_language.toUpperCase()}
                                        </p>
                                        <p className='text-lg flex items-center flex-wrap gap-2'>
                                            <span className='font-semibold'>Genres:</span>{' '}
                                            {movie.genres.map(({ name }: { name: string }) => (
                                                <Chip>{name}</Chip>
                                            ))}
                                        </p>
                                        <p className='text-lg'>
                                            <span className='font-semibold'>Popularity:</span> {movie.popularity}
                                        </p>
                                    </div>
                                </div>
                                <hr className='border-color/30 my-10' />
                                <div className='mb-10'>
                                    <SubHeading>Casts of the Movie</SubHeading>
                                    <div className='flex space-x-4 flex-wrap justify-center gap-4 py-4'>
                                        {cast.map((member) => (
                                            <CastCard member={member} key={member.id} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-1 md:border-l border-color/20'>
                            <SubHeading className='sticky top-[60px] bg-secondary'>Recommended Movies</SubHeading>
                            <div className='grid grid-cols-1 gap-4 mt-4'>
                                {recommendedMovies.map((movie) => (
                                    <RecommendedMovieCard movie={movie} key={movie?.id} />
                                ))}
                            </div>
                        </div>
                    </div>
                </Frame>
            </div>
        </div>
    );
};

export default MovieDetailsPage;
