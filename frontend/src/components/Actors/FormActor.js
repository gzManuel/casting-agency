import { useState } from 'react';
import classes from './FormActor.module.css'
import useHttp from '../../hooks/useHttp';
import { addActor } from '../../lib/api';

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
        sendRequest(actor).then(() =>{
            props.fetchActors();
            setName('');
            setGender('');
        }
        );
    }

    return (

        <form onSubmit={addActorHandler}>
            <label>Name</label><br />
            <input type='text' value={name} onChange={event => setName(event.target.value)} className={classes.textName} /><br />
            <label>Gender</label><br />
            <select className={classes.genderSelector} value={gender} onChange={event => setGender(event.target.value)}>
                <option>Male</option>
                <option>Female</option>
            </select><br />
            <button>
                Save Actor
            </button>
            <button onClick={(event) => { event.preventDefault(); props.onCancelForm() }} >Cancel</button>
        </form>

    );
};

export default FormActor;