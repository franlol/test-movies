import { TMovie } from '../../store/movies/movies.types'
import { getGenreById } from '../../utils/genres.utils';
import styles from './movieCard.module.scss';
import * as moviesActions from '../../store/movies/movies.actions';
import { useDispatch } from 'react-redux';

export default function MovieCard(props: { movie: TMovie }) {
  const { movie } = props;

  const dispatch = useDispatch();
  const cx = movie.isWatched ? styles.watched : '';

  const watchedHanbdler = () => {
    dispatch(moviesActions.setIsWatched(movie.id, !movie.isWatched));
  }

  return (
    <article key={movie.id} className={styles.wrapper}>
      <h3>title: {movie.title}</h3>
      <button onClick={watchedHanbdler} className={cx}>Watched?</button>
      {movie.genres && (
        <>
          <p>Genres:</p>
          <ul>{movie.genres.map(genre => <li key={movie.id}>{getGenreById(genre)?.name}</li>)}</ul>
        </>
      )}
    </article>
  )
}
