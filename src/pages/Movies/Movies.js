import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { getMoviesByQuery } from 'services/fetch';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    if (query === '' || query === null) return;
    async function getMoviesList() {
      try {
        const searchMovies = await getMoviesByQuery(query);
        setMovies(searchMovies);
        setInputValue('');
      } catch (error) {
        console.log(error.message);
      }
    }
    getMoviesList();
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();

    setSearchParams({ query: inputValue });
  };

  const handleChange = e => {
    setInputValue(e.target.value)
  };

  return (
    <>
      <SearchForm
        handleSubmit={handleSubmit}
        value={inputValue}
        onChange={handleChange}
      />
      {query && <MoviesList movies={movies} />}
    </>
  );
};
