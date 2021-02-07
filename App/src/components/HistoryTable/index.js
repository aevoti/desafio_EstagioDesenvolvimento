import React from 'react';

import './style.css';

function HistoryTable(props) {
    return (
        <table className={props.className}>
            <thead>
                <tr>
                    <th>City</th>
                    <th>Region</th>
                    <th>Country</th>
                    <th>Temp</th>
                    <th>desc</th>
                    <th>Wind</th>
                    <th>precip</th>
                    <th>press</th>
                    <th>localtime</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {props.children}
            </tbody>
        </table>
    )
}

export default HistoryTable;