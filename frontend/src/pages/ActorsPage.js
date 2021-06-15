import { useEffect } from 'react';

import { getAllActors } from '../lib/api';
import useHttp from '../hooks/useHttp';

import Actors from '../components/Actors/Actors';

const ActorsPage = () => {
    const { response: loadedActors, sendRequest } = useHttp(getAllActors);

    useEffect(() => {
        sendRequest();
    }, [sendRequest]);

    return (
        <Actors actors={
            loadedActors
        }
            onFetchActors={sendRequest} />
    );
};

export default ActorsPage;