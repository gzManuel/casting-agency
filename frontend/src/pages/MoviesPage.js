import { useEffect } from "react";

import Movies from "../components/Movies/Movies";

import { getAllMovies } from '../lib/api';
import useHttp from "../hooks/useHttp";

const MoviesPage = () => {
    const {response: loadedMovies,sendRequest} = useHttp(getAllMovies);

    useEffect(()=>{
        sendRequest();
    },[sendRequest])
    
    return (
        <Movies movies={loadedMovies} onFetchMovies={sendRequest}/>
    );
};

export default MoviesPage;