import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCast } from 'services/fetch';
import { List, ActorCard, Photo, Content } from './Cast.styled';
import photo from 'images/placeholder.png'

const Cast = () => {
  const [cast, setCast] = useState();
  const { movieId } = useParams();


  useEffect(() => {
    async function getCast() {
      try {
        const cast = await getMovieCast(movieId);
        setCast(cast);
      } catch (error) {
        console.log(error.message);
      }
    }
    getCast();
  }, [movieId]);

  return (
    <List>
      {cast &&
        cast.map(({ profile_path, name, character, id }) => {
          return (
            <ActorCard key={id}>
                <Photo
                  src={profile_path ? `https://image.tmdb.org/t/p/w500/${profile_path}` : photo}
                  alt={name}
                  width="100"
                />
              <Content>
                <span>{name}</span>
                <span>{character}</span>
              </Content>
            </ActorCard>
          );
        })}
    </List>
  );
};

export default Cast;
