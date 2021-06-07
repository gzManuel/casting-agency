import classes from './Actors.module.css';
import Table from '../UI/Table';
import { useCallback, useEffect, useState } from 'react';
import Actor from './Actor';

const Actors = () => {
    const header = ['Id', 'Name', 'Gender', 'Delete'];
    const [data, setData] = useState([]);

    const fetchActorsHandler = useCallback(async () => {
        const response = await fetch('http://localhost:5000/actors');
        const jsonResponse = await response.json();
        const transformedActors = jsonResponse.actors.map(actor => {

            const deleteActorHandler = async (id) => {
                const response = await fetch('http://localhost:5000/actors/' + id, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const jsonResponse = await response.json();
                if (jsonResponse.success) {
                    fetchActorsHandler();
                }
            };

            return ({
                column1: actor.id,
                column2: actor.name,
                column3: actor.gender,
                column4: <button onClick={()=>deleteActorHandler(actor.id)}> Delete </button>
            });
        });
        setData(transformedActors);
    }, []);



    useEffect(() => {
        fetchActorsHandler();
    }, [fetchActorsHandler]);

    return (
        <div className={classes.wrapperActor}>
            <label>Double click to select your actor</label>
            <Actor />

            <Table tableHeader={header} tableData={data} />

        </div>
    );
};

export default Actors;