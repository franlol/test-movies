import React from 'react';
import { useSelector } from 'react-redux';
import { TMovie } from '../../store/movies/movies.types';
import { TStore } from '../../store/store';

export default function MoviesList() {
  const { list: moviesList } = useSelector((state: TStore) => state.movies);

  return (
    <section>
      <h2>Movies:</h2>
      {moviesList.map((movie) => {
        console.log('movie', movie)

        return (
          <article key={movie.id}>
            <h3>title: {movie.title}</h3>
            
          </article>
        )
      })}
    </section>
  )
}
