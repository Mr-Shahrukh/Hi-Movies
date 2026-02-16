const API_KEY = "443184bf"; // put your key here
const BASE_URL = "https://www.omdbapi.com/";

export const searchMovies = async (query) => {
  const response = await fetch(`${BASE_URL}?s=${query}&apikey=${API_KEY}`);

  if (!response.ok) {
    throw new Error("API Error");
  }

  const data = await response.json();
  return data.Search || []; // return movie array
  
  
};
