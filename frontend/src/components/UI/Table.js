import React from 'react';
import classes from './Table.module.css';
import { useHistory } from 'react-router';

const Table = (props) => {
    var history = useHistory()
    const formatedHeader = props.header.map(column => {
        return <th key={column}>{column}</th>;
    });

    const formatedBody = props.body.map(row => {
        let rowData = [];
        var id;
        for (var column in row) {
            if (column === 'column1') {
                id = row[column];
            }


            rowData.push(<td key={row[column]}>{row[column]}</td>);
        }
        return (
            <tr key={row.column1} onDoubleClick={function () {
                if (props.path) {
                    const uri = props.path + id;
                    console.log(uri);
                    history.push(uri);
                }
            }} >
                {rowData}
            </tr>
        );
    });

    return (
        <table className={classes.table}>
            <thead>
                <tr>
                    {formatedHeader}
                </tr>
            </thead>
            <tbody >
                {formatedBody}
            </tbody>
        </table>
    );
};

export default Table;