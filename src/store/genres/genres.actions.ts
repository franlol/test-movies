import { AppDispatch } from "../store";
import { genresReducers } from "./genres.slice";

import { EGenreDefaults, TGenre, TGenreId } from "./genres.types";

export const addGenre = (genre: TGenre) => {
  return (dispatch: AppDispatch) => {
    dispatch(genresReducers.addGenre(genre))
  }
}

export const addCurrentGenre = (genreId: TGenreId) => {
  return (dispatch: AppDispatch) => {
    dispatch(genresReducers.addCurrentGenre(genreId))
  }
}

export const delCurrentGenre = (genreId: TGenreId) => {
  return (dispatch: AppDispatch) => {
    dispatch(genresReducers.delCurrentGenre(genreId))
  }
}

export const updateFilter = (genre: EGenreDefaults) => {
  return (dispatch: AppDispatch) => {
    dispatch(genresReducers.updateFilter(genre))
  }
}
