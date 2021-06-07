import React from 'react';
import classes from './Table.module.css';

const Table = (props) => {
    //props.tableHeader = ['Id','Name','Gender']
    const tableHeader = props.tableHeader.map(column => {
        return <th key={column}>{column}</th>;
    });

    /*props.tableData = [{
        column1:'',
        column2:'',
        column3:''
    },
    {
        column1:'',
        column2:'',
        column3:'']
    }*/

    const tableData = props.tableData.map(row => {
        // const rowData = row.map(column => {
        //     return <td>{column}</td>;
        // })

        let rowData = [];
        for (var column in row) {
            rowData.push(<td key={row[column]}>{row[column]}</td>);
        }

        return (
            <tr key={row.column1}>
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
            <tbody>
                {tableData}
            </tbody>
        </table>
    );
};

export default Table;