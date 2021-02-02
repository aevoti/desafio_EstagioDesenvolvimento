import React from 'react';

import './style.css';

function LocationDate(props) {
    const showLocation = props.location.name ? `${props.location.name}, ${props.location.region}, ${props.location.country}` : ' ';

    return (
        <div className={props.className}>
            <span className="location">{showLocation}</span>
            <span className="date">{props.location.localtime && ' '}</span>
        </div>
    )
}

export default LocationDate;