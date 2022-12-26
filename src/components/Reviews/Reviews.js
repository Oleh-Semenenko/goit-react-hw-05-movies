import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviews } from 'services/fetch';
import {List} from './Reviews.styled'

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const controller = new AbortController();
    async function getReviews() {
      setIsLoading(true);
      try {
        const reviews = await getMovieReviews(movieId, {signal: controller.signal});
        setReviews(reviews);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    getReviews();

    return () => {
      controller.abort();
    }
  }, [movieId]);

  return (
    <section>
      {isLoading && <div>Loading...</div>}
      <List>
        {reviews &&
          reviews.length > 0 &&
          reviews.map(({ author, content, id }) => {
            return (
              <li key={id}>
                <h3>{author}</h3>
                <p>{content}</p>
              </li>
            );
          })}
      </List>
      {reviews && reviews.length === 0 && !isLoading && (
        <div>Sorry, we don't have any reviews</div>
      )}
    </section>
  );
};

export default Reviews;
