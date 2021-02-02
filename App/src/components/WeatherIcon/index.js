import React from 'react';
import Figure from '../Figure';

import './style.css';

function WeatherIcon(props) {
    return (
        <div className = {props.className}>
            <div className="icon-container">
                {props.current.weather_icons && <Figure className="weather-icon" current={props.current} />}
            </div>
        </div>
    )
}

export default WeatherIcon;