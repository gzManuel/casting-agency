import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Movie from '../components/Movies/Movie';
import useHttp from '../hooks/useHttp';
import { getMovie } from '../lib/api';

/**
 * A component that renders and shows the Movie component, also get and load the movie into the Movie component.
 */
const MovieDetailPage = () => {
    const { movieId } = useParams();
    const {response: loadedMovie, sendRequest} = useHttp(getMovie);

    useEffect(()=>{
        sendRequest(movieId);
    },[sendRequest,movieId]);
    
    console.log(loadedMovie);
    return (
        <Movie movie={loadedMovie}/>
    );
};

export default MovieDetailPage;