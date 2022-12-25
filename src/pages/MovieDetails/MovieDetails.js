import { useState, useEffect } from 'react';
import {
  Outlet,
  useParams,
  NavLink,
  useLocation,
} from 'react-router-dom';
import { getMovieById } from 'services/fetch';
import { GoBackBtn } from 'components/GoBackBtn/GoBackBtn';

export const MovieDetails = () => {
  const location = useLocation();
  const { movieId } = useParams();
  const [movie, setMovie] = useState();
  const backLinkHref = location.state?.from ?? '/movies';
  console.log(location.state);

  useEffect(() => {
    async function getMovie() {
      try {
        const searchMovie = await getMovieById(movieId);
        setMovie(searchMovie);
      } catch (error) {}
    }
    getMovie();
  }, [movieId]);

  return (
    <main>
      <GoBackBtn to={backLinkHref} />
      {movie && (
        <div>
          <h2>{movie.title}</h2>
          <p>User score: {Math.round(movie.vote_average) * 10}%</p>
          <div>
            <h3>Overview</h3>
            <span>{movie.overview}</span>
          </div>
          <div>
            <h3>Genres</h3>
            {movie.genres.map(({ id, name }) => {
              return <span key={id}>{name}</span>;
            })}
          </div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            alt={movie.title}
          />
        </div>
      )}
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </main>
  );
};
