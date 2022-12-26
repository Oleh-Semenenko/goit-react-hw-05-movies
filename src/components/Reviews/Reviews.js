import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviews } from 'services/fetch';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function getReviews() {
      setIsLoading(true);
      try {
        const reviews = await getMovieReviews(movieId);
        setReviews(reviews);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    getReviews();
  }, [movieId]);

  return (
    <section>
      {isLoading && <div>Loading...</div>}
      <ul>
        {reviews &&
          reviews.length > 0 &&
          reviews.map(({ author, content, id }) => {
            return (
              <li key={id}>
                <p>{author}</p>
                <p>{content}</p>
              </li>
            );
          })}
      </ul>
      {reviews && reviews.length === 0 && !isLoading && (
        <div>Sorry, we don't have any reviews</div>
      )}
    </section>
  );
};

export default Reviews;
