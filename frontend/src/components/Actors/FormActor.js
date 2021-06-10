import { useState } from 'react';
import classes from './FormActor.module.css'
import useHttp from '../../hooks/useHttp';
import { addActor } from '../../lib/api';
import Button from '../UI/Button';

const FormActor = (props) => {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('Male');
    const { sendRequest } = useHttp(addActor);

    //Async method to make it easier to utilize promises.
    const addActorHandler = (event) => {
        event.preventDefault();
        const actor = {
            name,
            gender
        }
        sendRequest(actor).then(() => {
            props.fetchActors();
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
                className={classes.textName}
                placeholder='Actor Name' /><br />
            <label>Gender</label><br />
            <select className={classes.genderSelector} value={gender} onChange={event => setGender(event.target.value)}>
                <option>Male</option>
                <option>Female</option>
            </select><br />
            <Button>
                Save Actor
            </Button>
            <Button onClick={(event) => {
                event.preventDefault(); props.onCancelForm()
            }}>
                Cancel
            </Button>
        </form>

    );
};

export default FormActor;