import { useEffect } from 'react';

import { getAllActors } from '../lib/api';
import useHttp from '../hooks/useHttp';

import Actors from '../components/Actors/Actors';

/**
 * A component that render Actors component and fill with actors.
 */
const ActorsPage = () => {
    const { response: loadedActors, sendRequest } = useHttp(getAllActors);

    useEffect(() => {
        sendRequest();
    }, [sendRequest]);
    return (
        <Actors actors={loadedActors}
            // Updating the loadedActors every time is deleted an actor.
            onFetchActors={sendRequest} />
    );
};

export default ActorsPage;