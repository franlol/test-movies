import { createSlice } from '@reduxjs/toolkit';

import genresReducer from './genres.reducer';
import genresInitialState from './genres.state';

const genresSlice = createSlice({
  name: 'genres',
  initialState: genresInitialState,
  reducers: genresReducer
});

export const genresReducers = genresSlice.actions;

export default genresSlice.reducer;
