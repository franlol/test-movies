import { configureStore } from '@reduxjs/toolkit';

import moviesReducers from './movies/movies.slice';

export const store = configureStore({
  reducer: {
    movies: moviesReducers,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

export type TStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
