import React, { useEffect } from 'react';
import Actor from '../components/Actors/Actor';
import { getActor } from '../lib/api';
import useHttp from '../hooks/useHttp';
import { useParams } from 'react-router';
import Spinner from '../components/UI/Spinner';
/**
 * Component that render and show the detailed information of an actor, also get and load the actor into Actor component..
 */
const ActorDetail = () => {
    // gets the id parameter of the route path.
    const { actorId } = useParams();

    const { httpState, sendRequest } = useHttp(getActor);

    useEffect(() => {
        sendRequest(actorId)
    }, [actorId, sendRequest]);

    //Checking the status, if is not completed show the Spinner.
    if (httpState.status !=='completed') {
        return <Spinner/>
    }

    return (
        <Actor actor={httpState.data} />
    );
};

export default ActorDetail;