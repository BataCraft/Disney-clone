import axios from "axios";

export const getTrendingMovies = async () => {
  const MovieUrl = "https://api.themoviedb.org/3";
  const apiKey = "c31e09548c960d7190ad062a5e7c89b5";
  try {
    const response = await axios.get(`${MovieUrl}/movie/popular?api_key=${apiKey}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    throw error;
  }
};



const movieByGenreBaseURL = 'https://api.themoviedb.org/3/discover/movie?api_key=c31e09548c960d7190ad062a5e7c89b5';

export const getMovieByGenreId = (id) => 
  axios.get(movieByGenreBaseURL + "&with_genres=" + id);