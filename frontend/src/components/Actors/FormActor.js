import { useState } from 'react';
import classes from './FormActor.module.css'

const FormActor = (props) => {
    const [name,setName] = useState('');
    const [gender,setGender] = useState('Male');

    //Async method to make it easier to utilize promises.
    const addActorHandler = async (event) => {
        const actor = {
            name,
            gender
        }
        event.preventDefault();
        const response = await fetch('http://localhost:5000/actors',
        {
            method:'Post',
            headers:{
                'Content-Type': 'application/json'
            },
            // Always uttilize JSON.stringify to convert in string an object or json.
            body:JSON.stringify(actor)
        });
        //The response will be a json.
        const data = await response.json();

        //success
        if(data.success){
            //update
            setName('');
            setGender('Male');
            props.onFetchActors();
        }
    }

    return (
       
            <form onSubmit={addActorHandler}>
                <label>Name</label><br />
                <input type='text' value={name} onChange={event=>setName(event.target.value)} className={classes.textName}/><br/>
                <label>Gender</label><br />
                <select className={classes.genderSelector} value={gender} onChange={event=>setGender(event.target.value)}>
                    <option>Male</option>
                    <option>Female</option>
                </select><br />
                <button>
                    Save Actor
                </button>
                <button onClick={(event)=>{event.preventDefault(); props.onCancelForm()}} >Cancel</button>
            </form>

    );
};

export default FormActor;