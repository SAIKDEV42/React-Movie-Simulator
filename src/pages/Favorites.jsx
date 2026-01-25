import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContext"
import MyMovieCard from "../components/MyMovieCard"


function Favorites() {

    const { favorites } = useMovieContext()

    if (favorites.length>0) {
        return (

            <div>
                <h2>Your Favorites! </h2>

                
                <div className="movies-grid">
                {favorites.map((movie) => (
                    <MyMovieCard movie={movie} key={movie.imdbID} />
                )

                )}
            </div></div>


        )
    }


    return <div className="favorites-empty">
        <h2>NO FAV movies yet </h2>
        <p>start adding favorites to see them here...</p>
    </div>
}

export default Favorites