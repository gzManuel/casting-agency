import React from 'react';
import { useState } from 'react';

const FormMovie = () => {
    const [title,setTitle] = useState('');
    const [releaseDate,setReleaseDate] = useState('');

    const addMovieHandler = (event) => {
        event.preventDefault();
        console.log(title);
        console.log(releaseDate);
    }

    return (
       
            <form onSubmit={addMovieHandler}>
                <label>Title</label><br />
                <input type='text' value={title} onChange={event=>setTitle(event.target.value)} />

                <label>Gender</label><br />
                <input type='date' value={releaseDate} onChange={event=>setReleaseDate(event.target.value)}/>
               
                <button>
                    Add Movie
                </button>
            </form>

    );
};

export default FormMovie;