import React from 'react';
import Figure from '../Figure';

function WeatherIcon(props) {
    return (
        <div className = {props.className}>
            {props.current.weather_icons && <Figure className="weather-icon" current={props.current} />}
        </div>
    )
}

export default WeatherIcon;