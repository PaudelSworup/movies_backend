const axios = require("axios");
const SingleMovies = async (id) => {
  const singleMovies = await axios(
    `${process.env.baseURL}/movie/${id}?api_key=${process.env.API_KEY}&original_language=en=US`
  );

  const response = await singleMovies?.data;
  return response;
};

module.exports = SingleMovies;
