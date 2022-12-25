import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviews } from 'services/fetch';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getReviews() {
      try {
        const reviews = await getMovieReviews(movieId);
        setReviews(reviews);
      } catch (error) {
        console.log(error.message);
      }
    }
    getReviews();
  }, [movieId]);
    
  return (
    <ul>
      {reviews.length > 0 ? (reviews.map(({ author, content, id }) => {
        return (
          <li key={id}>
            <p>{author}</p>
            <p>{content}</p>
          </li>
        );
      })) : <div>Sorry, we don't have any reviews</div>}
    </ul>
  );
};
