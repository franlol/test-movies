import store from "../store/store";

/**
 * 
 * @param genres string of genres
 * @returns Array of genres without duplications
 */
export const getUniqueGenres = (genres: string = ''): Array<string> => {
  return Array.from(
    new Set(genres
      .split(',')
      .filter(genre => genre)
      .map(genre => genre.trim())
    )
  );
}

/**
 * Will return a Boolean matching if the Film with provided Title already exists
 * @param title title of the film
 * @returns boolean state if film already exists or not
 */
export const isTitleAdded = (title: string = '') => {
  const { list: moviesList } = store.getState().movies;

  return moviesList.some(movie => movie.title.toLocaleLowerCase().replaceAll(' ', '') === title.toLocaleLowerCase().replaceAll(' ', ''));
}
