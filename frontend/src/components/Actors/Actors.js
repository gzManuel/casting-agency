import { useState } from 'react';

import { deleteActor } from '../../lib/api';
import useHttp from '../../hooks/useHttp';

import classes from './Actors.module.css';
import Table from '../UI/Table';
import Modal from '../UI/Modal';
import FormActor from './FormActor';
import Button from '../UI/Button';

const Actors = (props) => {
    const [showForm, setShowForm] = useState(false);
    const { sendRequest } = useHttp(deleteActor);
    const tableHeader = ['Id', 'Name', 'Gender', 'Delete'];

    const tableBody = props.actors.map(actor => {
        return ({
            column1: actor.id,
            column2: actor.name,
            column3: actor.gender,
            column4: <Button
                onClick={() => {
                    sendRequest(actor.id).then(() => props.onFetchActors());
                }}> Delete </Button>
        });
    });

    return (
        <div className={classes.wrapperActor}>
            <label >Double click to select your actor</label><br />
            <Button style={{ backgroundColor: 'rgb(24, 26, 27)' }}
                onClick={() => { setShowForm(true) }}>Add actor</Button>

            <Modal show={showForm}
                title="Add Actor"
                onCancel={() => setShowForm(false)} >
                <FormActor fetchActors={props.onFetchActors}
                    onCancelForm={() => setShowForm(false)} />
            </Modal>

            <Table path='/actors/' header={tableHeader} body={tableBody} />
        </div>
    );
};

export default Actors;