import { useLocation } from 'react-router-dom';
import PropTypes, { arrayOf } from 'prop-types';
import { List, Movie, StyledLink } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  
  return (
    <List>
      {movies.map(({ id, name, title }) => {
        return (
          <Movie key={id}>
            <StyledLink
              to={`/movies/${id}`}
              state={{ from: location }}
            >
              {title ? title : name}
            </StyledLink>
          </Movie>
        );
      })}
    </List>
  );
};

MoviesList.propTypes = {
  movies: arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      title: PropTypes.string,
    })
  ),
};
