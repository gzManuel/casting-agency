import { useState } from 'react/cjs/react.development';

const FormActor = (props) => {
    const [name,setName] = useState('');
    const [gender,setGender] = useState('Female');

    const addActorHandler = (event) => {
        event.preventDefault();
        
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