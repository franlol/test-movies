import { FormEvent, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import * as moviesActions from '../../store/movies/movies.actions';
import { getUniqueGenres, isTitleAdded } from '../../utils/movies.utils';

export default function Form() {
  const titleInput = useRef<HTMLInputElement>(null);
  const tagsInput = useRef<HTMLInputElement>(null);

  const [error, setError] = useState<string | null>(null)

  const dispatch = useDispatch();

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const uniqueGenres = getUniqueGenres(tagsInput.current?.value);

    if (isTitleAdded(titleInput.current?.value)) {
      setError('Film already exists');
      return;
    }

    setError(null);

    dispatch(moviesActions.addMovie({
      id: uuidv4(),
      title: titleInput.current?.value || '',
      genres: uniqueGenres
    }))
  }

  return (
    <form onSubmit={submitHandler}>
      {error && <span>{error}</span>}
      <label htmlFor='titleInput'>
        Title: <input id='titleInput' ref={titleInput} />
      </label>

      <label htmlFor='tagsInput'>
        Tags: <input id='tagsInput' ref={tagsInput} />
      </label>

      <button type='submit'>Save film</button>
    </form>
  )
}
