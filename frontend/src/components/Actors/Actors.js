import classes from './Actors.module.css';
import Table from '../UI/Table';
import Modal from '../UI/Modal';
import FormActor from './FormActor';
import Actor from './Actor';
import { useCallback, useEffect, useState } from 'react';


const Actors = (props) => {
    const [showForm, setShowForm] = useState(false);

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
                column4: <button style={{ backgroundColor: '#181a1b', color: 'white' }} onClick={() => deleteActorHandler(actor.id)}> Delete </button>
            });
        });
        setData(transformedActors);
    }, []);


    useEffect(() => {
        fetchActorsHandler();
    }, [fetchActorsHandler]);

    return (
        <div className={classes.wrapperActor}>
            <label>Double click to select your actor</label><br />
            <button style={{ backgroundColor: 'rgb(24, 26, 27)' }}
                onClick={() => { setShowForm(true) }}>Add actor</button>
            <Modal show={showForm}
                title="Add Actor"
                body={<FormActor onFetchActors={fetchActorsHandler}
                    onCancelForm={() => setShowForm(false)} />}
                onCancel={() => setShowForm(false)}
                footer='Good Job' />

            <Actor />
            <Table tableHeader={header} tableData={data} />
        </div>
    );
};

export default Actors;