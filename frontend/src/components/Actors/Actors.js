import { useState } from 'react';

import { deleteActor } from '../../lib/api';
import useHttp from '../../hooks/useHttp';

import classes from './Actors.module.css';
import Table from '../UI/Table';
import Modal from '../UI/Modal';
import FormActor from './FormActor';
import Button from '../UI/Button';

/**
 * This component show actors into a table.
 * @param {object} props
 * @param {import('../../lib/api').Actor[]} props.actors The actors to show in the table.
 * @param {function} props.onFetchActors The function to be executed after delete an actor row.
 * @returns Actors component
 */

const Actors = ({actors, onFetchActors}) => {
    //Shows the actor form.
    const [showForm, setShowForm] = useState(false);
    //The function to delete the actor.
    const { sendRequest } = useHttp(deleteActor);
    const tableHeader = ['Id', 'Name', 'Gender', 'Delete'];

    //Transform all the attributes of the actors into an array of objects with columns key.
    //Each column represents every column in the table.
    const tableBody = actors.map(actor => {
        return ({
            column1: actor.id,
            column2: actor.name,
            column3: actor.gender,
            //This is the button that will delete a row of actors.
            column4: <Button
                onClick={() => {
                    sendRequest(actor.id).then(() => onFetchActors(localStorage.getItem('token')));
                }}> Delete </Button>
        });
    });

    return (
        <div className={classes.wrapperActor}>
            <label >Double click to select your actor</label><br />
            <Button style={{ backgroundColor: 'rgb(24, 26, 27)' }}
                onClick={() => { setShowForm(true) }}>Add actor</Button>
            {/* The modal to show the actor form. */}
            <Modal show={showForm}
                title="Add Actor"
                onCancel={() => setShowForm(false)} >
                <FormActor fetchActors={onFetchActors}
                    onCancelForm={() => setShowForm(false)} />
            </Modal>

            <Table path='/actors/' header={tableHeader} body={tableBody} />
        </div>
    );
};

export default Actors;