
import "../css/MovieCard.css"
import { useMovieContext } from "../contexts/MovieContext"

function MyMovieCard({ movie }) {

    const {
        isFavorite,
        removeFromFavorites,
        addToFavorites } = useMovieContext()

    const favorite = isFavorite(movie.imdbID)

    function onFavoriteClick(e) {

        e.preventDefault()
        if (favorite) removeFromFavorites(movie.imdbID)
        else addToFavorites(movie)
    }

    return <div className="movie-card">

        <div className="movie-poster">
            <img src={movie.Poster} alt={movie.title} ></img>

            <div className="movie-overlay">
                <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>♥</button>
            </div>
        </div>

        <div className="movie-info">
            <h3>{movie.Title} </h3>
            <p> {movie.Year} </p>
        </div>

    </div>
}

export default MyMovieCard 