import React from 'react';
import classes from './Table.module.css';
import { useHistory } from 'react-router';

/**
 * 
 * @typedef {object} Rows
 * @property {object} column1
 * @property {object} column2
 * @property {object} column3
 */

/**
 * A table that shows information
 * @param {object} props The properties
 * @param {string[]} props.header The header titles of the table, the titles length have to be the same as the attributes of every object of the body.
 * @param {Rows[]} props.body The body of the table, every object need to have the same amount of attributes as the same length of title.
 * @param {string} props.path The path to link and show the detailed information of a row.
 */
const Table = ({ header, body, path }) => {
    var history = useHistory()
    //Formatting the titles of the table.
    const formattedHeader = header.map(column => {
        return <th key={column}>{column}</th>;
    });

    //
    const formattedBody = body.map(row => {
        let rowData = [];
        var id;

        //Going through every column of row.
        for (var column in row) {
            //Getting the id of the first column
            if (column === 'column1') {
                id = row[column];
            }
            //Formatting the rows of the table
            rowData.push(<td key={row[column]}>{row[column]}</td>);
        }
        //function to show detailed information of a row.
        const showDetailedInformation = () => {
            if (path) {
                const uri = path + id;
                console.log(uri);
                history.push(uri);
            }
        }
        return (
            <tr key={row.column1}
                onDoubleClick={showDetailedInformation} >
                {rowData}
            </tr>
        );
    });

    return (
        <table className={classes.table}>
            <thead>
                <tr>
                    {formattedHeader}
                </tr>
            </thead>
            <tbody >
                {formattedBody}
            </tbody>
        </table>
    );
};

export default Table;