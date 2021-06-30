import { useEffect } from 'react';

import { getAllActors } from '../lib/api';
import useHttp from '../hooks/useHttp';

import Actors from '../components/Actors/Actors';
import Spinner from '../components/UI/Spinner';

/**
 * A component that render Actors component and fill with actors.
 */
const ActorsPage = () => {
    const { httpState, sendRequest } = useHttp(getAllActors);

    //Use Effect is executed after every rendering.
    useEffect(() => {
        sendRequest();
    }, [sendRequest]);
    //Checking the status, is is not send or pending will show the Spinner.
    if (httpState.status === 'pending' || httpState.status === 'not send') {
        return <Spinner />
    }

    return (
        <Actors actors={httpState.data}
            // Updating the loadedActors every time is deleted an actor.
            onFetchActors={sendRequest} />
    );
};

export default ActorsPage;