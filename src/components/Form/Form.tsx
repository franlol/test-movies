import { FormEvent, KeyboardEvent, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import * as moviesActions from '../../store/movies/movies.actions';
import * as genresActions from '../../store/genres/genres.actions';

import { TStore } from '../../store/store';
import { getFullTrimmedString, isMovieAdded } from '../../utils/movies.utils';
import styles from './form.module.scss';
import { getGenreById, getIdByGenreName } from '../../utils/genres.utils';

export default function Form() {
  const titleRef = useRef<HTMLInputElement>(null);
  const tagsRef = useRef<HTMLInputElement>(null);

  const [error, setError] = useState<string | null>(null);

  const { customGenres } = useSelector((state: TStore) => state.genres)
  const dispatch = useDispatch();

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    const title = getFullTrimmedString(titleRef.current?.value);
    if (!title) return;

    if (isMovieAdded(title)) {
      setError('Film already exists');
      return;
    }

    setError(null);

    dispatch(moviesActions.addMovie({
      id: uuidv4(),
      title,
      genres: customGenres,
      isWatched: false
    }))
  }

  const tagsKeydownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();

      const genreName = getFullTrimmedString(tagsRef.current?.value);
      tagsRef.current!.value = '';
      if (!genreName) return;

      const newGenre = { id: uuidv4(), name: genreName }
      const genreId = getIdByGenreName(genreName);

      if (genreId && !customGenres.includes(genreId)) {
        dispatch(genresActions.addCurrentGenre(genreId));
        return;
      }

      if (!genreId) {
        dispatch(genresActions.addGenre(newGenre));
        dispatch(genresActions.addCurrentGenre(newGenre.id));
      }
    }
  }

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      {error && <span>{error}</span>}
      <label htmlFor='titleInput'>
        Title: <input id='titleInput' ref={titleRef} />
      </label>

      <label htmlFor='tagsInput'>
        Tags: <input id='tagsInput' ref={tagsRef} onKeyDown={tagsKeydownHandler} />
      </label>

      <ul>
        {customGenres.map(genre => {
          const currentGenre = getGenreById(genre);
          if (!currentGenre) return;

          return <li key={currentGenre.id}>{currentGenre.name} <button onClick={() => dispatch(genresActions.delCurrentGenre(currentGenre.id))}>X</button></li>
        })}
      </ul>

      <button>Save Movie</button>
    </form>
  )
}
