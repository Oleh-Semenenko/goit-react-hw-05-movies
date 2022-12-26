import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCast } from 'services/fetch';
import { List, ActorCard, Photo, Content } from './Cast.styled';
import photo from 'images/placeholder.png'

const Cast = () => {
  const [cast, setCast] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();


  useEffect(() => {
    async function getCast() {
      setIsLoading(true);
      try {
        const cast = await getMovieCast(movieId);
        setCast(cast);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    getCast();
  }, [movieId]);

  return (
    <section>
      {isLoading && <div>Loading...</div>}
      <List>
        {cast &&
          cast.length > 0 &&
          cast.map(({ profile_path, name, character, id }) => {
            return (
              <ActorCard key={id}>
                <Photo
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                      : photo
                  }
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
      {cast && cast.length === 0 && !isLoading && (
        <div>Sorry, we don't have any cast</div>
      )}
    </section>
  );
};

export default Cast;
