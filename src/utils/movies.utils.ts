import store from "../store/store";

/**
 * 
 * @param genres string of genres
 * @returns Array of genres without duplications
 */
export const getUniqueGenres = (genres: Array<string> = []): Array<string> => {
  return Array.from(
    new Set(genres
      .map(genre => genre.trim().toLowerCase())
      .filter(genre => genre)
    )
  );
}

/**
 * Will return a Boolean matching if the Film with provided Title already exists
 * @param title title of the film
 * @returns boolean state if film already exists or not
 */
export const isMovieAdded = (title: string = '') => {
  const { list: moviesList } = store.getState().movies;

  return moviesList.some(movie => movie.title.toLocaleLowerCase().replaceAll(' ', '') === title.toLocaleLowerCase().replaceAll(' ', ''));
}

/**
 * Returns a string without any space between words, not only at the beggining and at the end.
 * @param value string to trim
 * @returns trimmed string
 */
export const getFullTrimmedString = (value: string = '') => {
  return value
    .trim()
    .toLocaleLowerCase()
    .split(" ")
    .filter(genre => genre !== '')
    .join(" ");
}
