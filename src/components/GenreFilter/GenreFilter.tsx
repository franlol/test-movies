import { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import * as genresActions from '../../store/genres/genres.actions';

import { EGenreDefaults } from '../../store/genres/genres.types';
import { TStore } from '../../store/store';

export default function GenreFilter() {
  const radioHorrorRef = useRef<HTMLInputElement>(null);
  const radioRomanceRef = useRef<HTMLInputElement>(null);
  const radioComedyRef = useRef<HTMLInputElement>(null);
  const radioResetRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();
  const { filter: genreFilter } = useSelector((state: TStore) => state.genres)

  const radioClickHandler = (genre: EGenreDefaults) => {
    dispatch(genresActions.updateFilter(genre === EGenreDefaults.RESET
      ? EGenreDefaults.RESET
      : genre
    ))
  }

  // TODO: Refactor this 4x inputs
  return (
    <section>
      <form>
        <label htmlFor='radioHorror'>{EGenreDefaults.HORROR}
          <input
            type='radio'
            id='radioHorror'
            ref={radioHorrorRef}
            onChange={() => radioClickHandler(EGenreDefaults.HORROR)}
            checked={genreFilter === EGenreDefaults.HORROR}
          />
        </label>

        <label htmlFor='radioRomance'>{EGenreDefaults.ROMANCE}
          <input
            type='radio'
            id='radioRomance'
            ref={radioRomanceRef}
            onChange={() => radioClickHandler(EGenreDefaults.ROMANCE)}
            checked={genreFilter === EGenreDefaults.ROMANCE}
          />
        </label>

        <label htmlFor='radioComedy'>{EGenreDefaults.COMEDY}
          <input
            type='radio'
            id='radioComedy'
            ref={radioComedyRef}
            onChange={() => radioClickHandler(EGenreDefaults.COMEDY)}
            checked={genreFilter === EGenreDefaults.COMEDY}
          />
        </label>

        <label htmlFor='radioReset'>{EGenreDefaults.RESET}
          <input
            type='radio'
            id='radioReset'
            ref={radioResetRef}
            onChange={() => radioClickHandler(EGenreDefaults.RESET)}
            checked={genreFilter === EGenreDefaults.RESET}
          />
        </label>
      </form>
    </section>
  )
}
