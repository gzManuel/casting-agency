import { useState } from 'react';

import useHttp from '../../hooks/useHttp';
import { addActor } from '../../lib/api';

import styles from './FormActor.module.css'
import Button from '../UI/Button';

/**
 * An actor form to save a new actor row.
 * @param {object} props The properties.
 * @param {function} props.fetchActors A function that is executed after saving a new Actor.
 * @param {function} props.onCancelForm A function that is activated when is canceled the form.
 * @returns A formActor component.
 */

const FormActor = ({ fetchActors, onCancelForm }) => {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('Male');
    const { sendRequest } = useHttp(addActor);

    const addActorHandler = (event) => {
        event.preventDefault();
        /**
         * @type {import('../../lib/api').Actor}
         */
        const actor = {
            name,
            gender
        }
        sendRequest(actor).then(() => {
            fetchActors();
            setName('');
            setGender('');
        }
        );
    }

    return (

        <form onSubmit={addActorHandler} >
            <label>Name</label><br />
            <input type='text' value={name}
                onChange={event => setName(event.target.value)}
                className={styles.textName}
                placeholder='Actor Name' /><br />
            <label>Gender</label><br />
            <select className={styles.genderSelector} value={gender} onChange={event => setGender(event.target.value)}>
                <option>Male</option>
                <option>Female</option>
            </select><br />
            <Button>
                Save Actor
            </Button>
            <Button onClick={(event) => {
                event.preventDefault();
                onCancelForm();
            }}>
                Cancel
            </Button>
        </form>

    );
};

export default FormActor;