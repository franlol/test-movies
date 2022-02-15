import Form from '../../components/Form/Form';
import GenreFilter from '../../components/GenreFilter/GenreFilter';
import MoviesList from '../../components/MoviesList/MoviesList';
import Searchbar from '../../components/Searchbar/Searchbar';

import styles from './home.module.scss';

export default function Home() {
  return (
    <main className={styles.wrapper}>
      <h1>Movie Watchlist</h1>
      <Form />
      <h2>Movies:</h2>
      <Searchbar />
      <GenreFilter />
      <MoviesList />
    </main>
  )
}
