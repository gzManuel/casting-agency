import classes from './Actors.module.css';
import Table from '../UI/Table';
import { useEffect,useState } from 'react';
import { DUMMY_ACTORS } from '../../DUMMY_ACTORS.js';

const Actors = (props) => {
    const header = ['Id', 'Name', 'Gender'];
    const [data, setData] = useState([]);

    useEffect(()=>{

        const transformedActors = DUMMY_ACTORS.map(actor => {
            return ({
                column1: actor.id,
                column2: actor.name,
                column3: actor.gender
            });
        });

        setData(transformedActors);
    },[]);

    return (
        <div className={classes.wrapperActor}>
            <Table tableHeader={header} tableData={data} />
        </div>
    );
};

export default Actors;