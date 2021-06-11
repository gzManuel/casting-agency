import React from 'react';
import classes from './Table.module.css';

const Table = (props) => {
    const formatedHeader = props.header.map(column => {
        return <th key={column}>{column}</th>;
    });

    const formatedBody = props.body.map(row => {
        let rowData = [];
        for (var column in row) {
            rowData.push(<td key={row[column]}>{row[column]}</td>);
        }
        return (
            <tr key={row.column1} onDoubleClick={function(){
                //console.log('Hello World')
                //show more information of the row.
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