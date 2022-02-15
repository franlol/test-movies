import { TMovies } from "./movies.types";

const moviesInitialState: TMovies = {
  error: null,
  isLoading: false,
  movies: []
}

export default moviesInitialState;
