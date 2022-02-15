import { AppDispatch } from "../store";
import { moviesReducers } from "./movies.slice";
import { getMovie } from "./movies.services";

import { TMovie } from "./movies.types";

export const addMovie = (movie: TMovie) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(moviesReducers.setIsLoading(true));

      if (movie.title && movie.id) return dispatch(moviesReducers.addMovie(movie));

      throw new Error('Movie is missing information.');
    } catch (error) {
      console.log('Error in addMovie()', error as Error);

      dispatch(moviesReducers.setError(error as Error));
    } finally {
      dispatch(moviesReducers.setIsLoading(false));
    }
  }
}

export const setSearch = (movieToSearch: string) => {
  return (dispatch: AppDispatch) => {
    dispatch(moviesReducers.setSearch(movieToSearch))
  }
}

export const setIsWatched = (id: string, isWatched: boolean) => {
  return (dispatch: AppDispatch) => {
    dispatch(moviesReducers.setIsWatched({ id, isWatched }))
  }
}

// TODO: consider fetch the movies from any db (like tmdb) to get the cover image or other real info
export const getMovieFromApi = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(moviesReducers.setIsLoading(true));
      const data: TMovie = await getMovie();

      if (data) dispatch(moviesReducers.addMovie(data));

    } catch (error) {
      console.log('Error in getMovieFromApi()', error as Error);

      dispatch(moviesReducers.setError(error as Error));
    } finally {
      dispatch(moviesReducers.setIsLoading(false));
    }
  }
}
