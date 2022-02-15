import { AppDispatch } from "../store";
import { genresReducers } from "./genres.slice";

import { TGenre } from "./genres.types";

export const addGenre = (genre: TGenre) => {
  return (dispatch: AppDispatch) => {
    dispatch(genresReducers.addGenre(genre))
  }
}
