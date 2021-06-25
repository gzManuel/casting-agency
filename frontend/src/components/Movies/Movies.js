import React, { useState } from 'react';

import useHttp from '../../hooks/useHttp';
import { deleteMovie } from '../../lib/api';

import classes from './Movies.module.css';
import Table from '../UI/Table';
import Modal from '../UI/Modal';
import FormMovie from './FormMovie';
import Button from '../UI/Button';

/**
 * This component shows movies.
 * @param {object} props
 * @param {function} props.onFetchMovies The function to be executed after delete a movie row.
 * @param {import('../../lib/api').Movie[]} props.movies All the movies to show in the table.
 * @returns A Movie component.
 */
const Movies = ({ onFetchMovies, movies }) => {
    //To show the form FormMovie.
    const [showForm, setShowForm] = useState(false);
    const { sendRequest } = useHttp(deleteMovie);
    const tableHeader = ['Id', 'Title', 'Release Date', 'Delete'];

    const tableBody = movies.map(movie => {
        return ({
            column1: movie.id,
            column2: movie.title,
            column3: movie.release_date,
            //The button that delete a Movie.
            column4: <Button
                onClick={() => {
                    sendRequest(movie.id).then(() => onFetchMovies());
                }}> Delete </Button>
        });

    });
    return (
        <div className={classes.wrapperMovie}>
            <label>Double click to select your movie</label><br />
            <Button onClick={() => setShowForm(true)} >Add Movie</Button>
            {/* The modal to show the Movie Form. */}
            <Modal show={showForm}
                title='Add Movie'
                onCancel={() => setShowForm(false)}>
                <FormMovie
                    onCancelForm={() => setShowForm(false)}
                    fetchMovies={onFetchMovies}
                />
            </Modal>

            <Table path='/movies/' header={tableHeader} body={tableBody} />
        </div>
    );
};

export default Movies;