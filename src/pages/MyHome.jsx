import "../css/Home.css"

import { useState } from "react";
import MyMovieCard from "../components/MyMovieCard";
import movies from "../data/movies.json";
import { useEffect } from "react";
import { getMovieById, searchMovies } from "../services/api";

function MyHome() {

    const [searchQuery, setSearchQuery] = useState("");
    const [movieDetails, setMovieDetails] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(

        () => {

            const fetchMovies = async () => {


                try {
                    const results = [];

                    for (let movie of movies) {

                        const movieData = await getMovieById(movie.id);
                        results.push(movieData);
                    }
                    setMovieDetails(results);
                }
                catch (err) {
                    console.log(err);
                    setError("Failed to load data ...");
                } finally {
                    setLoading(false)
                };

            }
            fetchMovies();
        }, []);
        

    const handleSearch = async (e) => {
        e.preventDefault();

        if (!searchQuery.trim()) return
        if (loading) return;

        setLoading(true)
        try {
            const searchResults = await searchMovies(searchQuery)
            setMovieDetails(searchResults)
            setError(null)
        } catch (err) {
            console.log(err)
            setError("Failed to load movies...")
        } finally {
            setLoading(false)
        }
     }



    return <div className="home" >
        <form onSubmit={handleSearch} className="search-form">
            <input type="text"
                placeholder="search for movies"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input">
            </input>
            <button type="submit" className="search-btn">Search</button>
        </form>


        {error && <div className="error-message">{error}</div>}

        {loading ? <div className="loading">Loading...</div> : <div className="movies-grid">
            {movieDetails.map((movie) => (
                <MyMovieCard movie={movie} key={movie.imdbID} />
            ))}
        </div>}

    </div>

}

export default MyHome;
