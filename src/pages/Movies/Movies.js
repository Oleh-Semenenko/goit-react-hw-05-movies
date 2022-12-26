import { useSearchParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { getMoviesByQuery } from 'services/fetch';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const navigate = useNavigate();

  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (query === '' || query === null) return;
    async function getMoviesList() {
      setIsLoading(true);
      try {
        const searchMovies = await getMoviesByQuery(query);
        setMovies(searchMovies);
        setInputValue('');
        if (searchMovies.length === 0 && query) {
          alert('We did not find any movies. Please, change your request');
        }
      } catch {
        navigate('*', { replace: true });
      } finally {
        setIsLoading(false);
      }
    }
    getMoviesList();
  }, [query, navigate]);

  const handleSubmit = e => {
    e.preventDefault();

    setSearchParams({ query: inputValue });
  };

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <SearchForm
        handleSubmit={handleSubmit}
        value={inputValue}
        onChange={handleChange}
      />
      {isLoading && <div>Loading...</div>}
      {query && !isLoading && <MoviesList movies={movies} />}
    </>
  );
};

export default Movies;
