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
        return (
            <tr key={row.column1}>
                <td>
                    {row.column1}
                </td>
                <td>
                    {row.column2}
                </td>
                <td>
                    {row.column3}
                </td>
            </tr>
        );
    })

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