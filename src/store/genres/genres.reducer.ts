import { PayloadAction } from "@reduxjs/toolkit";
import { TGenre, TGenres } from "./genres.types";

const genresReducer = {
  addGenre: (state: TGenres, action: PayloadAction<TGenre>) => {
    state.genres.push(action.payload);
  },
  addCurrentGenres: (state: TGenres, action: PayloadAction<TGenre>) => {
    state.currentGenres.push(action.payload);
  }
}

export default genresReducer;
