import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  margin-top: 16px;
`;

export const ActorCard = styled.li`
  width: 160px;
  border-radius: 6px;
  box-shadow: 10px 9px 13px -6px rgba(0, 0, 0, 0.75);
`;

export const Photo = styled.img`
  display: block;
  width: 100%;
  height: 240px;
`;

export const Content = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
