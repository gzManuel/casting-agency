import React from 'react';
import { useState } from 'react';

import Button from '../UI/Button';
import classes from './FormMovie.module.css';

/**
 * @todo Refactor code and utilize the useHttpHook.
 * This is a form that is utilized to add a new Movie.
 * @param {object} props The properties
 * @param {function} props.fetchMovies A function that is executed after clicking Add Movie.
 * @param {function} props.onCancelForm A function that is executed after Cancel.
 * @returns A form Component.
 */
const FormMovie = ({fetchMovies, onCancelForm}) => {
    const [title, setTitle] = useState('');
    const [releaseDate, setReleaseDate] = useState('');

    //Function that add a new Movie.
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
            fetchMovies();
        }
    }

    return (

        <form onSubmit={addMovieHandler}>
            <label>Title</label><br />
            <input className={classes.input} type='text' value={title}
                onChange={event => setTitle(event.target.value)} /><br />

            <label>Gender</label><br />
            <input type='date' value={releaseDate}
                onChange={event => setReleaseDate(event.target.value)}
                className={classes.input} /><br />

            <Button>
                Add Movie
            </Button>
            <Button onClick={e => { e.preventDefault(); onCancelForm() }}>
                Cancel
            </Button>
        </form>

    );
};

export default FormMovie;