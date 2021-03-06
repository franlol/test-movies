import { FormEvent, useRef } from 'react'
import { useDispatch } from 'react-redux';

import * as moviesActions from '../../store/movies/movies.actions';
import styles from './searchbar.module.scss';

export default function Searchbar() {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(moviesActions.setSearch(searchInputRef.current?.value || ''))
  }

  return (
    <form onSubmit={submitHandler} className={styles.wrapper}>
      <input ref={searchInputRef} />
      <button>Search</button>
    </form>
  )
}
