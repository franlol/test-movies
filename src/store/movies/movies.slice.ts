import { createSlice } from '@reduxjs/toolkit';

import moviesReducer from './movies.reducer';
import moviesInitialState from './movies.state';

const moviesSlice = createSlice({
  name: 'movies',
  initialState: moviesInitialState,
  reducers: moviesReducer
});

export const moviesActions = moviesSlice.actions;

export default moviesSlice.reducer;
