import { getTrendingFilms } from 'services/fetch';
import { TrendingMovies } from 'components/TrendingMovies/TrendingMovies';
import { useState, useEffect } from 'react';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      try {
        setMovies(await getTrendingFilms());
      } catch (error) {
        console.log(error.message);
      }
    }
    getMovies();
  }, []);

  return (
    <>
      <main>
        <h1>Trending Movies</h1>
        {movies.length > 0 && <TrendingMovies movies={movies} />}
      </main>
    </>
  );
};
