import classes from './Actors.module.css';
import Table from '../UI/Table';
import { useEffect, useState } from 'react';

const Actors = () => {
    const header = ['Id', 'Name', 'Gender','Delete'];
    const [data, setData] = useState([]);

    const deleteActorHandler = async (id) => {
        const response = await fetch('http://localhost:5000/actors/'+id,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            }
        });
        const jsonResponse = await response.json();
        if(jsonResponse.success){
            console.log('Successfull');
        }
    }

    useEffect(() => {
        
        fetch('http://localhost:5000/actors').then((response) => {
            return response.json();
        }).then((data) => {
            const transformedActors = data.actors.map(actor => {

                return ({
                    column1: actor.id,
                    column2: actor.name,
                    column3: actor.gender,
                    column4: <button onClick={()=>deleteActorHandler(actor.id)}> Delete </button>
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