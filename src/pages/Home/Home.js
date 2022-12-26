import { getTrendingFilms } from 'services/fetch';
import { TrendingMovies } from 'components/TrendingMovies/TrendingMovies';
import { useState, useEffect } from 'react';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    async function getMovies() {
      setIsLoading(true);
      try {
        setMovies(
          await getTrendingFilms({
            signal: controller.signal,
          })
        );
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    getMovies();
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <main>
      <h1>Trending Movies</h1>
      {isLoading && <div>Loading...</div>}
      {movies.length > 0 && <TrendingMovies movies={movies} />}
    </main>
  );
};

export default Home;
