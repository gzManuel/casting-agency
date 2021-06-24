import styles from './Actor.module.css';
import LineDivider from "../UI/LineDivider";
import { ReactComponent as ChevronBlack } from '../../icons/chevron-black.svg';
import Table from "../UI/Table";
import Button from "../UI/Button";


/**
 * @todo Return error if isn't found an actor with the given id.
 * @todo Change the returns documentation.
 * 
 * This component show information of a single actor.
 * @param {object} a json object with the actor information to show.
 * ```JSON
 * {
 *  id: number,
 *  name:<string>,
 *  gender:<string>,
 *  movies:<Array> of movie objects:
 * }
 * ```
 * @returns An Actor component.
 */

const Actor = ({ actor }) => {
    const headerTable = ['Id', 'Title', 'Release Date', 'Delete'];

    //If isn't an Array means that the actor is empty.
    const bodyTable = (!Array.isArray(actor)) ? actor.movies.map(movie => {
        return ({
            column1: movie.id,
            column2: movie.title,
            column3: movie.release_date,
            column4: <Button>Delete</Button>
        });
    }) : [];


    return (
        <div className={styles.wrapper}>
            <section className={styles.actorWrapper} >
                <h1 className={styles.tittle}>Actor Info</h1>
                {/* Shows the id of the actor */}
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
                {/* Shows the Name of the actor */}
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
                {/* Shows the Gender of the Actor */}
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
                <Table header={headerTable} body={bodyTable} />
                <Button>Add new Movie</Button>
            </section>
        </div>
    );
};

export default Actor;