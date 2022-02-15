import { PayloadAction } from "@reduxjs/toolkit";
import { TMovies, TMovie } from "./movies.types";

const moviesReducer = {
  addMovie: (state: TMovies, action: PayloadAction<TMovie>) => {
    state.movies.push(action.payload);
  },
  setIsLoading: (state: TMovies, action: PayloadAction<boolean>) => {
    state.isLoading = action.payload
  },
  setError: (state: TMovies, action: PayloadAction<Error>) => {
    state.error = action.payload;
  }
}

export default moviesReducer;