import classes from './Actors.module.css';
import Table from '../UI/Table';
import Modal from '../UI/Modal';
import FormActor from './FormActor';
import Actor from './Actor';
import { useState } from 'react';
import { deleteActor } from '../../lib/api';
import useHttp from '../../hooks/useHttp';

const Actors = (props) => {
    const [showForm, setShowForm] = useState(false);
    const { sendRequest } = useHttp(deleteActor);
    const actorHeaderTable = ['Id', 'Name', 'Gender', 'Delete'];

    const actorBodyTable = props.actors.map(actor => {
        return ({
            column1: actor.id,
            column2: actor.name,
            column3: actor.gender,
            column4: <button style={{ backgroundColor: '#181a1b', color: 'white' }}
                onClick={() => {
                    sendRequest(actor.id).then(() => props.onFetchActors());
                }}> Delete </button>
        });

    });

    return (
        <div className={classes.wrapperActor}>
            <label >Double click to select your actor</label><br />
            <button style={{ backgroundColor: 'rgb(24, 26, 27)' }}
                onClick={() => { setShowForm(true) }}>Add actor</button>

            <Modal show={showForm}
                title="Add Actor"
                body={<FormActor fetchActors={props.onFetchActors}
                    onCancelForm={() => setShowForm(false)} />}
                onCancel={() => setShowForm(false)} />
            <Actor />

            <Table tableHeader={actorHeaderTable} tableData={actorBodyTable} />
        </div>
    );
};

export default Actors;