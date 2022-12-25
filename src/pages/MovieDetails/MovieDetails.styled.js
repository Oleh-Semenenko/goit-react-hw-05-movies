import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const CardWrapper = styled.div`
  display: flex;
  gap: 30px;
`;

export const Poster = styled.img`
  display: block;
  width: 500px;
`;

export const Content = styled.div`
  flex-grow: 1;
`;

export const Genre = styled.span`
  :not(:last-child) {
    margin-right: 10px;
  }
`;

export const GenresTitle = styled.h3`
  margin-bottom: 16px;
`;

export const List = styled.ul`
  padding-left: 16px;
  border: 1px solid grey;
  border-radius: 6px;
  margin-top: 16px;
`;

export const Item = styled.li`
  padding-top: 8px;
  padding-bottom: 8px;
`;

export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;

  :hover {
    color: #f55138;
  }
`;
