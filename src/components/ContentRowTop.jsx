import { ContentRowMovies } from "./ContentRowMovies"
import { GenresIdDb } from "./GenresIdDb"

import { LastMovieInDB } from "./LastMovieInDB"


export const ContentRowTop = () => {
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
    <div className="container-fluid">
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
    </div>


 <ContentRowMovies/>
 <div className="row">

<LastMovieInDB/>

<GenresIdDb genres={genres} title={'Generos en la base de datos'}/>


    </div>
</div>

  )
}
