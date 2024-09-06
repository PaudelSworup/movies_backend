const axios = require("axios");
const Trending = async (page) => {
  const trendingMovies = await axios(
    `${process.env.baseURL}/trending/all/week?api_key=${process.env.API_KEY}&language=en=US&page=${page}`
  );

  const response = await trendingMovies?.data?.results;
  return response;
};

const netflixOriginals = async (page) => {
  const netflixOriginal = await axios(
    `${process.env.baseURL}/discover/tv?api_key=${process.env.API_KEY}&with_network=213&page=${page}`
  );

  const response = await netflixOriginal?.data?.results;
  return response;
};

const actionMovies = async (page) => {
  const action = await axios(
    `${process.env.baseURL}/discover/movie?api_key=${process.env.API_KEY}&with_genres=28&page=${page}`
  );
  const response = await action?.data?.results;
  return response;
};

const comedyMovies = async (page) => {
  const comedy = await axios(
    `${process.env.baseURL}/discover/movie?api_key=${process.env.API_KEY}&with_genres=35&page=${page}`
  );
  const response = await comedy?.data?.results;
  return response;
};

const horrorMovies = async (page) => {
  const horror = await axios(
    `${process.env.baseURL}/discover/movie?api_key=${process.env.API_KEY}&with_genres=27&page=${page}`
  );
  const response = await horror?.data?.results;
  return response;
};

const romanceMovies = async (page) => {
  const romance = await axios(
    `${process.env.baseURL}/discover/movie?api_key=${process.env.API_KEY}&with_genres=10749&page=${page}`
  );
  const response = await romance?.data?.results;
  return response;
};


const mysteryMovies = async (page) => {
  const mystery = await axios(
    `${process.env.baseURL}/discover/movie?api_key=${process.env.API_KEY}&with_genres=9648&page=${page}`
  );
  const response = await mystery?.data?.results;
  return response;
};

const scfiMovies = async (page) => {
  const sifi = await axios(
    `${process.env.baseURL}/discover/movie?api_key=${process.env.API_KEY}&with_genres=878&page=${page}`
  );
  const response = await sifi?.data?.results;
  return response;
};

const westernMovies = async (page) => {
  const western = await axios(
    `${process.env.baseURL}/discover/movie?api_key=${process.env.API_KEY}&with_genres=37&page=${page}`
  );
  const response = await western?.data?.results;
  return response;
};

const animationMovies = async (page) => {
  const animation = await axios(
    `${process.env.baseURL}/discover/movie?api_key=${process.env.API_KEY}&with_genres=16&page=${page}`
  );
  const response = await animation?.data?.results;
  return response;
};

const fetchTV = async (page) => {
  const tv = await axios(
    `${process.env.baseURL}/discover/movie?api_key=${process.env.API_KEY}&with_genres=10770&page=${page}`
  );
  const response = await tv?.data?.results;
  return response;
};

const popular = async (page) => {
  const popular = await axios(
    `${process.env.baseURL}/movie/popular?api_key=${process.env.API_KEY}&language=en=US&page=${page}`
  );

  const response = await popular?.data?.results;
  return response;
};

const topRated = async (page) => {
  const topRated = await axios(
    `${process.env.baseURL}/movie/top_rated?api_key=${process.env.API_KEY}&language=en=US&page=${page}`
  );

  const response = await topRated?.data?.results;
  return response;
};

const nowPlaying = async (page) => {
  const nowplaying = await axios(
    `${process.env.baseURL}/movie/now_playing?api_key=${process.env.API_KEY}&language=en-US&page=${page}`
  );

  const response = await nowplaying?.data?.results;
  return response;
};

const upComing = async (page) => {
  const upComing = await axios(
    `${process.env.baseURL}/movie/upcoming?api_key=${process.env.API_KEY}&page=${page}`
  );
  const response = await upComing?.data?.results;
  return response;
};

const Recommendations = async (id) => {
  const recommendatios = await axios(
    `${process.env.baseURL}/movie/${id}/recommendations?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  const response = await recommendatios?.data?.results;
  return response;
};

const similar = async (id) => {
  const similar = await axios(
    `${process.env.baseURL}/movie/${id}/similar?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  const response = await similar?.data?.results;
  return response;
};

const Casts = async (id) => {
  const Casts = await axios(
    `${process.env.baseURL}/movie/${id}/credits?api_key=${process.env.API_KEY}`
  );
  const response = await Casts?.data?.cast;
  return response;
};

const videos = async (id) => {
  const video = await axios(`${process.env.BASE_VIDEO_URL}?tmdb_id=${id}`);
  const response = await video?.data;
  return response;
};



module.exports = {
  Trending,
  netflixOriginals,
  popular,
  topRated,
  nowPlaying,
  upComing,
  Recommendations,
  similar,
  Casts,
  actionMovies,
  comedyMovies,
  horrorMovies,
  romanceMovies,
  mysteryMovies,
  scfiMovies,
  westernMovies,
  animationMovies,
  fetchTV,
  videos,
  
};
