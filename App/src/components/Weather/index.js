import React from 'react';

import './style.css';

function Weather(props) {
    const temperature = props.current.temperature ? `${props.current.temperature}°` : ' ';
    return (
        <div className={props.className}>
            <span className="temperature">{temperature}</span>
            <span className="statistics">
                <span>Wind: {props.current.wind_speed || 0}</span>
                <span>Precip: {props.current.precip || 0}</span>
                <span>Pressure: {props.current.pressure || 0}</span>
            </span>
        </div>
    )
}

export default Weather;