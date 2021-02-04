import React from 'react';

import './style.css';

function HistoryTable(props) {
    return (
        <table>
            <thead>
                <tr>
                    <td>City</td>
                    <td>Region</td>
                    <td>Country</td>
                    <td>Temperature</td>
                    <td>desc</td>
                    <td>Wind</td>
                    <td>precip</td>
                    <td>pressure</td>
                    <td>localtime</td>
                </tr>
            </thead>
            <tbody>
                {props.children}
            </tbody>
        </table>
    )
}

export default HistoryTable;