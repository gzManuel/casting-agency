import React from 'react';
import classes from './Table.module.css';

const Table = (props) => {
    const tableHeader = props.tableHeader.map(column => {
        return <th key={column}>{column}</th>;
    });

    const tableData = props.tableData.map(row => {
        let rowData = [];
        for (var column in row) {
            rowData.push(<td key={row[column]}>{row[column]}</td>);
        }
        return (
            <tr key={row.column1} onDoubleClick={function(){console.log('Hello World')}} >
                {rowData}
            </tr>
        );
    });

    return (
            <table className={classes.table}>
                <thead>
                    <tr>
                        {tableHeader}
                    </tr>
                </thead>
                <tbody >
                    {tableData}
                </tbody>
            </table>
    );
};

export default Table;