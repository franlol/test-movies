import React from 'react'
import { TMovie } from '../../store/movies/movies.types'

type TProps = {
  movie: TMovie;
}

export default function MovieCard(props: TProps) {
  const { movie } = props;
  
  return (
    <article key={movie.id}>
      <h3>title: {movie.title}</h3>
      <p>Watched: {movie.isWatched}</p>
      {movie.genres && (
        <>
          <p>Genres:</p>
          <ul>{movie.genres.map(genre => <li key={movie.id}>{genre}</li>)}</ul>
        </>
      )}
    </article>
  )
}
