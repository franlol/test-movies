import store from "../store/store";
import { EGenreDefaults, TGenreId } from "../store/genres/genres.types";

/**
 * Will return a Genre object that matches de provided id
 * @param id id of the Genre
 * @returns Genre object
 */
export const getGenreById = (id: TGenreId) => {
  const genres = store.getState().genres.list;

  return genres.find(genre => genre.id === id);
}

/**
 * Will return a Genre ID of the provided Genre Name
 * @param name name of the Genre
 * @returns Id
 */
export const getIdByGenreName = (name: string) => {
  const genres = store.getState().genres.list;

  return genres.find(genre =>
    genre.name.toLowerCase() === name.toLowerCase())?.id;
}
