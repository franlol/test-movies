import { TGenreId } from "../genres/genres.types"

export type TMovies = {
  isLoading: boolean;
  error: Error | null;
  list: Array<TMovie>;
  search: string;
}

export type TMovie = {
  id: string;
  title: string;
  description?: string;
  genres?: Array<TGenreId>;
  cover?: string;
  isWatched: boolean;
}
