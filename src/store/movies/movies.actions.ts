import { AppDispatch } from "../store";
import { moviesActions } from "./movies.slice";
import { getMovie } from "./movies.services";

import { TMovie } from "./movies.types";

export const getMovieFromApi = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(moviesActions.setIsLoading(true));
      const data: TMovie = await getMovie();

      if (data) dispatch(moviesActions.addMovie(data));

    } catch (error) {
      console.log('Error in getMovieFromApi()', error as Error);

      dispatch(moviesActions.setError(error as Error));
    } finally {
      dispatch(moviesActions.setIsLoading(false));
    }
  }
}
