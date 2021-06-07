import React from 'react';
import { useState } from 'react';

const FormMovie = () => {
    const [title, setTitle] = useState('');
    const [releaseDate, setReleaseDate] = useState('');

    const addMovieHandler = async (event) => {
        event.preventDefault();
        const movie = {
            title,
            release_date: releaseDate
        }

        const response = await fetch('http://localhost:5000/movies', {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json'
            },
            // Always uttilize JSON.stringify to convert in string an object or json.
            body: JSON.stringify(movie)
        });
        const data = await response.json();

        if (data.success) {
            setTitle('');
            setReleaseDate('');
        }
        

    }

    return (

        <form onSubmit={addMovieHandler}>
            <label>Title</label><br />
            <input type='text' value={title} onChange={event => setTitle(event.target.value)} />

            <label>Gender</label><br />
            <input type='date' value={releaseDate} onChange={event => setReleaseDate(event.target.value)} />

            <button>
                Add Movie
            </button>
        </form>

    );
};

export default FormMovie;