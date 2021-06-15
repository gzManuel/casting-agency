import React, { useEffect } from 'react';
import Actor from '../components/Actors/Actor';
import { getActor } from '../lib/api';
import useHttp from '../hooks/useHttp';
import { useParams } from 'react-router';

const ActorDetail = () => {
    const { actorId } = useParams();

    const { response: loadedActor, sendRequest } = useHttp(getActor);

    useEffect(() => sendRequest(actorId), [actorId, sendRequest]);

    return (
        <Actor  actor={loadedActor}/>
    );
};

export default ActorDetail;