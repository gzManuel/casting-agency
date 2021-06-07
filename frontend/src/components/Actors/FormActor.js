import { useState } from 'react';

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
        }
    }

    return (
       
            <form onSubmit={addActorHandler}>
                <label>Name</label><br />
                <input type='text' value={name} onChange={event=>setName(event.target.value)} />
                <label>Gender</label><br />
                <select value={gender} onChange={event=>setGender(event.target.value)}>
                    <option>Male</option>
                    <option>Female</option>
                </select><br />
                <button>
                    Add Actor
                </button>
            </form>

    );
};

export default FormActor;