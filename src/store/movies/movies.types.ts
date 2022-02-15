export type TMovies = {
  isLoading: boolean;
  error: Error | null;
  movies: Array<TMovie>
}

export type TMovie = {
  id: number;
  title: string;
  description?: string;
  genres: Array<TGenreId>;
  cover?: string;
}

export type TGenreId = number;
