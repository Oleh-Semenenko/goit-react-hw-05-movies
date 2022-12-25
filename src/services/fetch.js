import axios from 'axios';

const API_KEY = 'a63771d647f7bb08d541c6197de804ab';

export const getTrendingFilms = async () => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&language`
    );
    const results = await data.results;
    const dataMovies = results.map(({ backdrop_path, id, name, title }) => ({
      backdrop_path,
      id,
      name,
      title,
    }));
    return dataMovies;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieById = async id => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getMovieCast = async id => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    );
    return data.cast;
  } catch (error) {
    console.log(error.message);
  }
};

export const getMovieReviews = async id => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );
    return data.results;
  } catch (error) {
    console.log(error.message);
  }
};

export const getMoviesByQuery = async query => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`
    );
    return data.results;
  } catch (error) {
    console.log(error.message);
  }
};

