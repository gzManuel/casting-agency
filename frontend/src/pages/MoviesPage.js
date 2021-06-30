import { useEffect } from "react";

import Movies from "../components/Movies/Movies";

import { getAllMovies } from '../lib/api';
import useHttp from "../hooks/useHttp";
import Spinner from '../components/UI/Spinner';

/**
 * This component renders Movies, get and fill it with movies.
 */

const MoviesPage = () => {
    const { httpState, sendRequest } = useHttp(getAllMovies);

    useEffect(() => {
        sendRequest();
    }, [sendRequest])

    if (httpState.status === 'pending' || httpState.status === 'not send') {
        return <Spinner />
    }

    return (
        <Movies movies={httpState.data}
            // Update all the loaded movies when is deleted a movie row.
            onFetchMovies={sendRequest} />
    );
};

export default MoviesPage;