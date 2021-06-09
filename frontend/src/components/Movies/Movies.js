import React, { useEffect, useMemo, useState } from 'react';
import classes from './Movies.module.css';
import Table from '../UI/Table';

import Modal from '../UI/Modal';
import FormMovie from './FormMovie';

const Movies = () => {
    const header = ['Id', 'Title', 'Release Date', 'Delete'];
    const [data, setData] = useState([]);
    const [showForm, setShowForm] = useState(false);

    const { fetchMoviesHandler } = useMemo(() => {
        const fetchMoviesHandler = async () => {
            const response = await fetch('http://localhost:5000/movies');
            const json = await response.json();
            const transformedMovies = json.movies.map(movie => {
                return ({
                    column1: movie.id,
                    column2: movie.title,
                    column3: movie.release_date,
                    column4: <button onClick={() => deleteMovieHandler(movie.id)}>Delete</button>
                });
            });
            setData(transformedMovies);
        };
        const deleteMovieHandler = async (id) => {

            const response = await fetch('http://localhost:5000/movies/' + id,
                {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
            const jsonResponse = await response.json();
            jsonResponse.success && fetchMoviesHandler();
        }
        return { fetchMoviesHandler, deleteMovieHandler };
    }, []);

    useEffect(() => {
        fetchMoviesHandler();
    }, [fetchMoviesHandler]);

    return (
        <div className={classes.wrapperMovie}>
            <label>Double click to select your movie</label><br />
            <button onClick={() => setShowForm(true)} >Add Movie</button>
            <Modal show={showForm}
                onCancel={() => setShowForm(false)}
                body={<FormMovie onCancelForm={()=>setShowForm(false)} />} />
            <Table tableHeader={header} tableData={data} />
        </div>
    );
};

export default Movies;