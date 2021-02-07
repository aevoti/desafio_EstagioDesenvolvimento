import React from 'react';
import Button from '../Button';

function HistoryTableRow(props) {
    return (
        <tr>
            <td>{props.element.city}</td>
            <td>{props.element.region}</td>
            <td>{props.element.country}</td>
            <td>{props.element.temperature}</td>
            <td>{props.element.desc}</td>
            <td>{props.element.wind}</td>
            <td>{props.element.precip}</td>
            <td>{props.element.pressure}</td>
            <td>{props.element.localtime}</td>
            <td><Button text="Delete" onClick={props.delete} /></td>
        </tr>
    )
}

export default HistoryTableRow;