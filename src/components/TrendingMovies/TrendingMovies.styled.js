import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MoviesList = styled.ul`
  margin-top: 16px;
`;

export const Movie = styled.li`
  padding: 8px 16px;
`;

export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;

  :hover {
    color: #f55138;
  }
`;
