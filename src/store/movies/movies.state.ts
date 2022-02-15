import { TMovies } from "./movies.types";

const moviesInitialState: TMovies = {
  error: null,
  isLoading: false,
  list: [],
  search: ''
}

export default moviesInitialState;
