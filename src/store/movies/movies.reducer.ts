import { PayloadAction } from "@reduxjs/toolkit";
import { TMovies, TMovie } from "./movies.types";

const moviesReducer = {
  addMovie: (state: TMovies, action: PayloadAction<TMovie>) => {
    state.list.push(action.payload);
  },
  setIsLoading: (state: TMovies, action: PayloadAction<boolean>) => {
    state.isLoading = action.payload
  },
  setError: (state: TMovies, action: PayloadAction<Error>) => {
    state.error = action.payload;
  },
  setSearch: (state: TMovies, action: PayloadAction<string>) => {
    state.search = action.payload;
  },
  setIsWatched: (state: TMovies, action: PayloadAction<{ id: string, isWatched: boolean }>) => {
    const movie = state.list.find(movie => movie.id === action.payload.id);
    if (!movie) return;

    movie.isWatched = action.payload.isWatched;
    state.list
      .sort((a, b) => a.title > b.title ? 1 : -1)
      .sort((a, b) => Number(a.isWatched) - Number(b.isWatched))
  }
}

export default moviesReducer;
