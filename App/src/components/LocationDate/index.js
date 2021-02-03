import React from 'react';

import './style.css';

function LocationDate(props) {
    const location = `${props.location.name}, ${props.location.region}, ${props.location.country}`;
    const date = new Date(props.location.localtime);
    return (
        <div className={props.className}>
            <span className="location">{location}</span>
            <span className="date">{formatDate(date)}</span>
        </div>
    )
}

function formatDate(date) {
    const newDate = date.toString().split(' ').slice(0, 5);
    return newDate.join(' ');
}

export default LocationDate;