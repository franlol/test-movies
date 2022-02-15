import { configureStore } from '@reduxjs/toolkit';

import genresSlice from './genres/genres.slice';
import moviesSlice from './movies/movies.slice';

export const store = configureStore({
  reducer: {
    movies: moviesSlice,
    genres: genresSlice
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

export type TStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
