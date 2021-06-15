import { useParams } from "react-router-dom";

import styles from './Actor.module.css';
import LineDivider from "../UI/LineDivider";
import { ReactComponent as ChevronBlack } from '../../icons/chevron-black.svg';

const Actor = () => {
    // const { actorId } = useParams();

    const actor = {
        id: 1,
        name: 'Emma Watson',
        gender: 'Female',
        movies: [{
            id: 1,
            release_date: "01-01-2004",
            title: "Harry poter 3"
        }, {
            id: 5,
            release_date: "01-01-2017",
            title: "Beauty and the Beast"
        }]
    }



    return (
        <div className={styles.wrapper}>
            <section className={styles.actorWrapper} >
                <h1 className={styles.tittle}>Actor Info</h1>

                <div className={styles.row}>
                    <div className={styles.col} >
                        <h3 className={styles.attributeTitle}>Id:</h3>
                    </div>
                    <div className={styles.col}>
                        <span>{actor.id}</span>
                    </div>
                    <span style={{ display: 'none' }}>
                        <ChevronBlack />
                    </span>
                </div>
                <LineDivider />
                <div className={styles.row}>
                        <div className={styles.col}>
                            <h3 className={styles.attributeTitle}>Name:</h3>
                        </div>
                        <div className={styles.col}>
                            <span>{actor.name}</span>
                        </div>
                        <span >
                            <ChevronBlack />
                        </span>
                </div>
                <LineDivider />

                <div className={styles.row}>
                        <div className={styles.col}>
                            <h3 className={styles.attributeTitle}> Gender:</h3>
                        </div>
                        <div className={styles.col}>
                            <span>{actor.gender}</span>
                        </div>
                        <span>
                            <ChevronBlack />
                        </span>
                </div>

            </section>

            <section className={`${styles.actorWrapper} ${styles.movies}`}>
                <h1 className={styles.tittle}>Movies</h1>
                <table style={{ width: '100%' }}>
                    <thead>
                        <th>
                            Id
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Release Date
                        </th>
                        <th>
                            Delete
                        </th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Harry potter</td>
                            <td>2022-08-21</td>
                            <td><button>Delete</button></td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default Actor;