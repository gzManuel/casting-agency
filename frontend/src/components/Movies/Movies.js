import React from 'react';
import classes from './Movies.module.css';
import Table from '../UI/Table';

const DUMMY_MOVIES=[
    {
        "actors": [
            1,
            2
        ],
        "id": 1,
        "release_date": "01-01-2004",
        "title": "Harry poter 3"
    },
    {
        "actors": [
            3,
            4
        ],
        "id": 2,
        "release_date": "01-01-2015",
        "title": "Mad Max: Fury Road"
    },
    {
        "actors": [],
        "id": 3,
        "release_date": "01-01-2016",
        "title": "Your name"
    },
    {
        "actors": [
            5,
            6
        ],
        "id": 4,
        "release_date": "01-01-1999",
        "title": "Pirates of Silicon Valley"
    },
    {
        "actors": [
            2
        ],
        "id": 5,
        "release_date": "01-01-2017",
        "title": "Beauty and the Beast"
    }
];

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