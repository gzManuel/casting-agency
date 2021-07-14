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
    //Checking the status, if is not completed show the Spinner.
    if (httpState.status !=='completed') {
        return <Spinner />
    }

    return (
        <Actors actors={httpState.data===null?[]:httpState.data }
            // Updating the loadedActors every time is deleted an actor.
            onFetchActors={sendRequest} />
    );
};

export default ActorsPage;