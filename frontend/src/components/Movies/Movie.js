import React from 'react';
import styles from './Movie.module.css';
import Button from '../UI/Button';
import { ReactComponent as ChevronBlack } from '../../icons/chevron-black.svg';
import LineDivider from '../UI/LineDivider';
import Table from '../UI/Table';

const Movie = () => {
    // const { actorId } = useParams();
    const movie = {
        id: 1,
        title: 'Harry poter 3',
        release_date: '01-01-2004',
        actors: [{
            id: 1,
            name: "Emma Watson",
            gender: "Female"
        }, {
            id: 2,
            name: "Daniel Radcliffe",
            gender: "Male"
        }]
    }

    const headerTable=['Id','Name','Gender','Delete'];

    const bodyTable = movie.actors.map(actor => {
        return ({
            column1:actor.id,
            column2:actor.name,
            column3:actor.gender,
            column4:<Button>Delete</Button>
        });
    })



    return (
        <div className={styles.wrapper}>
            <section className={styles.actorWrapper} >
                <h1 className={styles.tittle}>Movie Info</h1>

                <div className={styles.row}>
                    <div className={styles.col} >
                        <h3 className={styles.attributeTitle}>Id:</h3>
                    </div>
                    <div className={styles.col}>
                        <span>{movie.id}</span>
                    </div>
                    <span style={{ display: 'none' }}>
                        <ChevronBlack />
                    </span>
                </div>
                <LineDivider />
                <div className={styles.row}>
                    <div className={styles.col}>
                        <h3 className={styles.attributeTitle}>Title:</h3>
                    </div>
                    <div className={styles.col}>
                        <span>{movie.title}</span>
                    </div>
                    <span >
                        <ChevronBlack />
                    </span>
                </div>
                <LineDivider />

                <div className={styles.row}>
                    <div className={styles.col}>
                        <h3 className={styles.attributeTitle}>Release Date:</h3>
                    </div>
                    <div className={styles.col}>
                        <span>{movie.release_date}</span>
                    </div>
                    <span>
                        <ChevronBlack />
                    </span>
                </div>

            </section>

            <section className={`${styles.actorWrapper} ${styles.movies}`}>
                <h1 className={styles.tittle}>Movies</h1>
                <Table header={headerTable} body={bodyTable} />
                <Button>Add new Movie</Button>
            </section>
        </div>
    );
};

export default Movie;