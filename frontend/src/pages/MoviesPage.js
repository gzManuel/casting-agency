import { useEffect } from "react";

import Movies from "../components/Movies/Movies";

import { getAllMovies } from '../lib/api';
import useHttp from "../hooks/useHttp";

/**
 * This component renders Movies, get and fill it with movies.
 */

const MoviesPage = () => {
    const {response: loadedMovies,sendRequest} = useHttp(getAllMovies);

    useEffect(()=>{
        sendRequest();
    },[sendRequest])
    
    return (
        <Movies movies={loadedMovies} 
        // Update all the loaded movies when is deleted a movie row.
        onFetchMovies={sendRequest}/>
    );
};

export default MoviesPage;