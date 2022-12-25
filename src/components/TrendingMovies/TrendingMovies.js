import { useLocation } from 'react-router-dom';
import PropTypes, { arrayOf } from 'prop-types';
import { MoviesList, Movie, StyledLink } from './TrendingMovies.styled';

export const TrendingMovies = ({ movies }) => {
  const location = useLocation();
  return (
    <MoviesList>
      {movies.map(({ id, name, title }) => {
        return (
          <Movie key={id}>
            <StyledLink to={`/movies/${id}`} state={{from: location}}>{title ? title : name}</StyledLink>
          </Movie>
        );
      })}
    </MoviesList>
  );
};

TrendingMovies.propTypes = {
  movies: arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      title: PropTypes.string,
    })
  ),
};
