import classes from './Actors.module.css';
import Table from '../UI/Table';

const DUMMY_ACTORS = [
    {
        "gender": "Male",
        "id": 1,
        "movies": [
            1
        ],
        "name": "Daniel Radcliffe"
    },
    {
        "gender": "Female",
        "id": 2,
        "movies": [
            1,
            5
        ],
        "name": "Emma Watson"
    },
    {
        "gender": "Male",
        "id": 3,
        "movies": [
            2
        ],
        "name": "Tom Hardy"
    },
    {
        "gender": "Fame",
        "id": 4,
        "movies": [
            2
        ],
        "name": "Anya Taylor-Joy"
    },
    {
        "gender": "Male",
        "id": 5,
        "movies": [
            4
        ],
        "name": "Noah Wyle"
    },
    {
        "gender": "Male",
        "id": 6,
        "movies": [
            4
        ],
        "name": "Anthony Michael Hall"
    }
];

const Actors = (props) => {
    const header = ['Id', 'Name', 'Gender'];
    const data = DUMMY_ACTORS.map(actor => {

        return ({
            column1: actor.id,
            column2: actor.name,
            column3: actor.gender
        });

    })

    return (
        <div className={classes.wrapperActor}>
            <Table tableHeader={header} tableData={data } />
        </div>
    );
};

export default Actors;