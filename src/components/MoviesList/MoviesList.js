import { NavLink, useLocation } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  
  return (
    <ul>
      {movies.map(({ id, name, title }) => {
        return (
          <li key={id}>
            <NavLink
              to={`/movies/${id}`}
              state={{ from: location }}
            >
              {title ? title : name}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};
