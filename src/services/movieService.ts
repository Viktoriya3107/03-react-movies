import axios from "axios";
import type { Movie } from "../types/movie";

// Тип відповіді від TMDB
interface FetchMoviesResponse {
  results: Movie[];
}

// Функція для пошуку фільмів
export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const response = await axios.get<FetchMoviesResponse>(
    "https://api.themoviedb.org/3/search/movie",
    {
      params: {
        query,
      },
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`, 
      },
    }
  );

  return response.data.results;
};