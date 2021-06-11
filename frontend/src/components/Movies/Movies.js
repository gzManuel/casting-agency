import React, { useState } from 'react';

import useHttp from '../../hooks/useHttp';
import { deleteMovie } from '../../lib/api';

import classes from './Movies.module.css';
import Table from '../UI/Table';
import Modal from '../UI/Modal';
import FormMovie from './FormMovie';
import Button from '../UI/Button';

const Movies = (props) => {
    const [showForm, setShowForm] = useState(false);
    const { sendRequest } = useHttp(deleteMovie);
    const tableHeader = ['Id', 'Title', 'Release Date', 'Delete'];

    const tableBody = props.movies.map(movie => {
        return ({
            column1: movie.id,
            column2: movie.title,
            column3: movie.release_date,
            column4: <Button style={{ backgroundColor: '#181a1b', color: 'white' }}
                onClick={() => {
                    sendRequest(movie.id).then(() => props.onFetchMovies());
                }}> Delete </Button>
        });

    });
    return (
        <div className={classes.wrapperMovie}>
            <label>Double click to select your movie</label><br />
            <Button onClick={() => setShowForm(true)} >Add Movie</Button>
            <Modal show={showForm}
                title='Add Movie'
                onCancel={() => setShowForm(false)}>
                <FormMovie
                    onCancelForm={() => setShowForm(false)}
                    fetchMovies={props.onFetchMovies}
                />
            </Modal>

            <Table header={tableHeader} body={tableBody} />
        </div>
    );
};

export default Movies;