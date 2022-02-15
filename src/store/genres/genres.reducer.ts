import { PayloadAction } from "@reduxjs/toolkit";
import { EGenreDefaults, TGenre, TGenreId, TGenres } from "./genres.types";

const genresReducer = {
  addGenre: (state: TGenres, action: PayloadAction<TGenre>) => {
    state.list.push(action.payload);
  },
  addCurrentGenre: (state: TGenres, action: PayloadAction<TGenreId>) => {
    state.customGenres.push(action.payload);
  },
  delCurrentGenre: (state: TGenres, action: PayloadAction<TGenreId>) => {
    state.customGenres = state.customGenres.filter(genre => genre !== action.payload)
  },
  updateFilter: (state: TGenres, action: PayloadAction<EGenreDefaults>) => {
    state.filter = action.payload;
  }
}

export default genresReducer;
