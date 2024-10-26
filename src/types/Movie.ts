export interface Movie {
    id: number;
    title: string;
    original_title: string;
    overview: string;
    release_date: string;
    backdrop_path: string;
    poster_path: string;
    genres?: {
        id: number;
        name: string;
    }[];
    genre_ids?: number[];
    original_language: string;
    popularity: number;
    vote_average: number;
    vote_count: number;
    adult: boolean;
    video: boolean;
}
