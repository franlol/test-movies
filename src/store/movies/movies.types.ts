export type TMovies = {
  isLoading: boolean;
  error: Error | null;
  list: Array<TMovie>
}

export type TMovie = {
  id: string;
  title: string;
  description?: string;
  genres?: Array<TGenreId>;
  cover?: string;
}

export type TGenreId = string;
