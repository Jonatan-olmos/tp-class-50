import GenrresCard from "./GenrresCard"
import PropTypes from "prop-types";

export const GenresIdDb = () => {
    const genres = [
    "Acción",
    "Aventura",
    "Animación",
    "Ciencia Ficción",
    "Comedia",
    "Documental",
    "Drama",
    "Fantasia",
    "Infantiles",
    "Musical",

 ]
    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">{"generos disponibles"}</h5>
                </div>
                <div className="card-body">
                    <div className="row">
                       {
                        genres.map((genre, index) =>   <GenrresCard key={genre + index} genre ={genre}/>)

                       }

                    </div>
                </div>
            </div>
        </div>
    )
}

GenresIdDb.propTypes = {
    title : PropTypes.string.isRequired,
    genres : PropTypes.array
}