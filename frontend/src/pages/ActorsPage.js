import { useEffect } from 'react';
import Actors from '../components/Actors/Actors';
import { getAllActors } from '../lib/api';
import useHttp from '../hooks/useHttp';

const ActorsPage = () => {
    const {response: loadedActors,sendRequest} = useHttp(getAllActors);
    
    useEffect(()=>{
        sendRequest();
    },[sendRequest]);

    return (
        <Actors actors={
            loadedActors
        } 
        onFetchActors={sendRequest}
        />
    );
};

export default ActorsPage;