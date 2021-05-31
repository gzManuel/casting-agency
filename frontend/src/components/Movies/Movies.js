import React from 'react';
import classes from './Movies.module.css';
import Table from '../UI/Table';
import { DUMMY_MOVIES } from '../../DUMMY_MOVIES';

const Movies = () => {
    const header = ['Id','Title','Release Date'];

    const data = DUMMY_MOVIES.map(movie=>{
        return {
            column1:movie.id,
            column2:movie.title,
            column3:movie.release_date
        };
    });

    return (
        <div className={classes.wrapperMovie}>
            <Table tableHeader={header} tableData={data}/>
        </div>
    );
};

export default Movies;