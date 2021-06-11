import React from 'react';
import { useState } from 'react';

import Button from '../UI/Button';
import classes from './FormMovie.module.css';

const FormMovie = (props) => {
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
            props.fetchMovies();
        }
    }

    return (

        <form onSubmit={addMovieHandler}>
            <label>Title</label><br />
            <input className={classes.input} type='text' value={title} 
            onChange={event => setTitle(event.target.value)} /><br/>

            <label>Gender</label><br />
            <input type='date' value={releaseDate} 
            onChange={event => setReleaseDate(event.target.value)} 
            className={classes.input}/><br/>

            <Button>
                Add Movie
            </Button>
            <Button onClick={e=>{e.preventDefault(); props.onCancelForm()}}>
                Cancel
            </Button>
        </form>

    );
};

export default FormMovie;