import Form from '../../components/Form/Form';
import GenreFilter from '../../components/GenreFilter/GenreFilter';
import MoviesList from '../../components/MoviesList/MoviesList';
import Searchbar from '../../components/Searchbar/Searchbar';

export default function Home() {
  return (
    <main>
      <Form />
      <GenreFilter />
      <Searchbar />
      <MoviesList />
    </main>
  )
}
