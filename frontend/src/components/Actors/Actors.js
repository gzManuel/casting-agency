import classes from './Actors.module.css';
import Table from '../UI/Table';
import { useEffect, useState } from 'react';

const Actors = () => {
    const header = ['Id', 'Name', 'Gender'];
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/actors').then((response) => {
            return response.json();
        }).then((data) => {
            const transformedActors = data.actors.map(actor => {

                return ({
                    column1: actor.id,
                    column2: actor.name,
                    column3: actor.gender
                });
            });
            setData(transformedActors);
        });
    }, []);

    return (
        <div className={classes.wrapperActor}>
            <Table tableHeader={header} tableData={data} />
        </div>
    );
};

export default Actors;