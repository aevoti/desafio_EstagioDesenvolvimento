import React from 'react';

function HistoryTableRow(props) {
    return (
        <tr key={props.element._id}>
            <td>{props.element.data.city}</td>
            <td>{props.element.data.region}</td>
            <td>{props.element.data.country}</td>
            <td>{props.element.data.temperature}</td>
            <td>{props.element.data.desc}</td>
            <td>{props.element.data.wind}</td>
            <td>{props.element.data.precip}</td>
            <td>{props.element.data.pressure}</td>
            <td>{props.element.data.localtime}</td>
        </tr>
    )
}

export default HistoryTableRow;