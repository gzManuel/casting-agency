import React, { useEffect, useState } from 'react';
import classes from './Movies.module.css';
import Table from '../UI/Table';

const Movies = () => {
    const header = ['Id', 'Title', 'Release Date'];
    const [data, setData] = useState([]);

    const fetchMoviesHandler = async () => {
        const response = await fetch('http://localhost:5000/movies');
        const json = await response.json();
        const transformedMovies = json.movies.map(movie => {
            return ({
                column1: movie.id,
                column2: movie.title,
                column3: movie.release_date
            });
        });
        setData(transformedMovies);
    };

    useEffect(() => {
        fetchMoviesHandler();
    }, []);

    return (
        <div className={classes.wrapperMovie}>
            <Table tableHeader={header} tableData={data} />
        </div>
    );
};

export default Movies;