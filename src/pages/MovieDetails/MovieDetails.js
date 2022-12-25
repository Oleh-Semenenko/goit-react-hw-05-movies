import { useState, useEffect, Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { getMovieById } from 'services/fetch';
import { GoBackBtn } from 'components/GoBackBtn/GoBackBtn';
import image from 'images/poster.png'
import {
  CardWrapper,
  Poster,
  Content,
  GenresTitle,
  Genre,
  List,
  Item,
  StyledLink,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const location = useLocation();
  const { movieId } = useParams();
  const [movie, setMovie] = useState();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    async function getMovie() {
      try {
        const searchMovie = await getMovieById(movieId);
        setMovie(searchMovie);
      } catch (error) {}
    }
    getMovie();
  }, [movieId]);

  return (
    <main>
      <GoBackBtn to={backLinkHref} />
      {movie && (
        <CardWrapper>
          <Poster
            src={
              movie.backdrop_path
                ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
                : image
            }
            alt={movie.title}
          />
          <Content>
            <h2>{movie.title}</h2>
            <p>User score: {Math.round(movie.vote_average) * 10}%</p>
            <div>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
            </div>
            <div>
              <GenresTitle>Genres</GenresTitle>
              {movie.genres.map(({ id, name }) => {
                return <Genre key={id}>{name}</Genre>;
              })}
            </div>
          </Content>
        </CardWrapper>
      )}
      <List>
        <Item>
          <StyledLink to="cast" state={{ from: backLinkHref }}>
            Cast
          </StyledLink>
        </Item>
        <Item>
          <StyledLink to="reviews" state={{ from: backLinkHref }}>
            Reviews
          </StyledLink>
        </Item>
      </List>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
