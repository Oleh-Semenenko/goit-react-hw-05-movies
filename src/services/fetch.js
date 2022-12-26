import axios from 'axios';

const API_KEY = 'a63771d647f7bb08d541c6197de804ab';

export const getTrendingFilms = async () => {
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
};

export const getMovieById = async id => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    return data;
};

export const getMovieCast = async id => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    );
    return data.cast;
};

export const getMovieReviews = async id => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );
    return data.results;
};

export const getMoviesByQuery = async query => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`
    );
    return data.results;
};

