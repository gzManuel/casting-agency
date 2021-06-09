import { act } from 'react-dom/cjs/react-dom-test-utils.production.min';
import Actors from '../components/Actors/Actors';
import { getAllActors } from '../lib/api';

const ActorsPage = () => {

    return (
        <Actors />
    );
};

export default ActorsPage;