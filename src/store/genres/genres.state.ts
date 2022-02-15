import { EGenreDefaults, TGenres } from "./genres.types";

const initialGenres = [
  {
    id: "4ee41076-53ea-4862-b862-b9a45cc9e03d",
    name: EGenreDefaults.COMEDY
  },
  {
    id: "ab1b3a0c-639c-423f-b4e3-e354e7428285",
    name: EGenreDefaults.HORROR
  },
  {
    id: "1abfda7a-90d0-4c8d-9287-7c40cfa8158f",
    name: EGenreDefaults.ROMANCE
  }
]

const genresInitialState: TGenres = {
  list: initialGenres,
  customGenres: [],
  filter: EGenreDefaults.RESET
}

export default genresInitialState;
