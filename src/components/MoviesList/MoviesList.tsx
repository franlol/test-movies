import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { EGenreDefaults } from '../../store/genres/genres.types';

import { TStore } from '../../store/store';
import { getIdByGenreName } from '../../utils/genres.utils';
import MovieCard from '../MovieCard/MovieCard';

export default function MoviesList() {
  const { list, search } = useSelector((state: TStore) => state.movies);
  const { filter: genreFilter } = useSelector((state: TStore) => state.genres);

  const moviesList = useMemo(() => !!search
    ? list.filter(movie => movie.title.includes(search))
    : list
    , [search, list])

  return (
    <section>
      {moviesList
        .filter(movie => movie.genres?.includes(getIdByGenreName(genreFilter)?.toLowerCase() || '') || genreFilter === EGenreDefaults.RESET)
        .map((movie) => <MovieCard key={`movieList-${movie.id}`} movie={movie} />)}
    </section>
  )
}
