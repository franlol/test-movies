import React from 'react'
import { useDispatch } from 'react-redux';

import { moviesActions } from '../../store/movies/movies.slice';

export default function Home() {
  const dispatch = useDispatch();

  const handler = () => dispatch(moviesActions.addMovie({
    id: 123,
    title: 'test',
    genres: []
  }))

  return (
    <div>
      test: <input></input>
      <button onClick={handler}>asd</button>
    </div>
  )
}
