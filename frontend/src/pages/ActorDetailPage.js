import React, { useEffect } from 'react';
import Actor from '../components/Actors/Actor';
import { getActor } from '../lib/api';
import useHttp from '../hooks/useHttp';
import { useParams } from 'react-router';
/**
 * Component that render and show the detailed information of an actor, also get and load the actor into Actor component..
 */
const ActorDetail = () => {
    // gets the id parameter of the route path.
    const { actorId } = useParams();

    const { response: loadedActor, sendRequest } = useHttp(getActor);

    useEffect(() =>
        sendRequest(actorId)
        ,[actorId, sendRequest]
    );

    return (
        <Actor actor={loadedActor} />
    );
};

export default ActorDetail;