
const API_KEY = "772e5116";
const BASE_URL = "https://www.omdbapi.com/";

// const url = `${BASE_URL}?apikey=${API_KEY}&i={imdbId}`


export const getMovieById = async (movieId) => {


    const response = await fetch(
        `${BASE_URL}?apikey=${API_KEY}&i=${movieId}`
    );

    const data = await response.json();

    if (data.Response === "True") {
        return data;
    } else {
        throw new Error(data.Error);
    }
}

export const searchMovies = async (query) => {
    const response = await fetch(

        `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}`

    );
    const data = await response.json();
    if (data.Response === "True") {
        return data.Search;   //  array of movies
    } else {
        return [];
    }
};