import React, { useEffect, useMemo, useState } from 'react';
import classes from './Movies.module.css';
import Table from '../UI/Table';

const Movies = () => {
    const header = ['Id', 'Title', 'Release Date', 'Delete'];
    const [data, setData] = useState([]);

    const { fetchMoviesHandler } = useMemo(() => {
        const fetchMoviesHandler = async () => {
            const response = await fetch('http://localhost:5000/movies');
            const json = await response.json();
            console.log(json);
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
            console.log(typeof (response));
            
            const jsonResponse = await response.json();
            jsonResponse.success&&fetchMoviesHandler();
        }
        return {fetchMoviesHandler, deleteMovieHandler};
    }, []);

    useEffect(() => {
        fetchMoviesHandler();
    }, [fetchMoviesHandler]);

    return (
        <div className={classes.wrapperMovie}>
            <label>Double click to select your movie</label>
            <Table tableHeader={header} tableData={data} />
        </div>
    );
};

export default Movies;