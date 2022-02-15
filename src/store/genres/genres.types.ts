export type TGenres = {
  list: Array<TGenre>,
  customGenres: Array<string>,
  filter: EGenreDefaults
}

export type TGenre = {
  id: TGenreId;
  name: string;
}

export type TGenreId = string;

export enum EGenreDefaults {
  HORROR = 'horror',
  ROMANCE = 'romance',
  COMEDY = 'comedy',
  RESET = 'reset'
}
