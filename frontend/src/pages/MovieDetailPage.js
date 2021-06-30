import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Movie from '../components/Movies/Movie';
import useHttp from '../hooks/useHttp';
import { getMovie } from '../lib/api';
import Spinner from '../components/UI/Spinner';

/**
 * A component that renders and shows the Movie component, also get and load the movie into the Movie component.
 */
const MovieDetailPage = () => {
    const { movieId } = useParams();
    const { httpState, sendRequest } = useHttp(getMovie);

    useEffect(() => {
        sendRequest(movieId);
    }, [sendRequest, movieId]);

    if (httpState.status === 'pending' || httpState.status === 'not send') {
        return <Spinner />
    }
    
    return (
        <Movie movie={httpState.data} />
    );
};

export default MovieDetailPage;