import React, { useCallback, useEffect, useState } from 'react';
import classes from './Movies.module.css';
import Table from '../UI/Table';

const Movies = () => {
    const header = ['Id', 'Title', 'Release Date', 'Delete'];
    const [data, setData] = useState([]);

    const deleteMovieHandler = async (id) => {
        const response = await fetch('http://localhost:5000/movies/' + id,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
        console.log(typeof(response));
        const jsonResponse = response.json();
        if (jsonResponse.success){
            //Update the table.
            console.log('Deleted');
        }
    }

    const fetchMoviesHandler = useCallback(async () => {
        const response = await fetch('http://localhost:5000/movies');
        const json = await response.json();
        const transformedMovies = json.movies.map(movie => {
            return ({
                column1: movie.id,
                column2: movie.title,
                column3: movie.release_date,
                column4: <button onClick={()=>deleteMovieHandler(movie.id)}>Delete</button>
            });
        });
        setData(transformedMovies);
    },[]);

    useEffect(() => {
        fetchMoviesHandler();
    }, [fetchMoviesHandler]);

    return (
        <div className={classes.wrapperMovie}>
            <Table tableHeader={header} tableData={data} />
        </div>
    );
};

export default Movies;