const API_URL = "https://www.omdbapi.com?apikey=e494ee6c";

export const fetchMovies = async (title) => {
  const response = await fetch(`${API_URL}&s=${title}`);
  const { Search, totalResults } = await response.json();
  return Search;
};
