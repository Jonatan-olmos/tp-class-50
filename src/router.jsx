import {
    createBrowserRouter,
} from 'react-router-dom'

import AppLayout from './layouts/AppLayout.jsx'
import { ContentRowMovies } from './components/ContentRowMovies.jsx'
import { LastMovieInDB } from './components/LastMovieInDB.jsx'
import { GenresIdDb } from './components/GenresIdDb.jsx'
import NotFound from './components/NotFound.jsx'

export const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/metrics",
                element: <ContentRowMovies />
            },
            {
                path: "/last-movie",
                element: <LastMovieInDB/>
            },
            {
                path: "/genres",
                element: <GenresIdDb/>
            }
        ]
    },{
        path: "*",
        element:<NotFound/>
    }
])
