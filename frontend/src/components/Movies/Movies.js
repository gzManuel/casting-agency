import React, { useState } from 'react';
import classes from './Movies.module.css';
import Table from '../UI/Table';

import Modal from '../UI/Modal';
import FormMovie from './FormMovie';
import useHttp from '../../hooks/useHttp';
import { deleteMovie } from '../../lib/api';

const Movies = (props) => {
    const [showForm, setShowForm] = useState(false);
    const { sendRequest } = useHttp(deleteMovie);
    const movieHeaderTable = ['Id', 'Title', 'Release Date', 'Delete'];

    const movieBodyTable = props.movies.map(movie => {
        return ({
            column1: movie.id,
            column2: movie.title,
            column3: movie.release_date,
            column4: <button style={{ backgroundColor: '#181a1b', color: 'white' }}
                onClick={() => {
                    sendRequest(movie.id).then(() => props.onFetchMovies());
                }}> Delete </button>
        });

    });
    return (
        <div className={classes.wrapperMovie}>
            <label>Double click to select your movie</label><br />
            <button onClick={() => setShowForm(true)} >Add Movie</button>
            <Modal show={showForm}
                onCancel={() => setShowForm(false)}
                body={<FormMovie
                    onCancelForm={() => setShowForm(false)} 
                    fetchMovies={props.onFetchMovies}
                    />} />

            <Table tableHeader={movieHeaderTable} tableData={movieBodyTable} />
        </div>
    );
};

export default Movies;