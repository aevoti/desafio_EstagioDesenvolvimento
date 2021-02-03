import React from 'react';

import WeatherIcon from '../WeatherIcon';
import './style.css';

function Weather(props) {
    return (
        <div className={props.className}>
            <div className="temperature">{props.current.temperature || 0}°</div>
            <WeatherIcon className="panel-mid" current={props.current} />
            <div className="statistics">
                <div className="statistics-container">
                    <span>Wind: {props.current.wind_speed || 0} kmph</span>
                    <span>Precip: {props.current.precip || 0} mm</span>
                    <span>Pressure: {props.current.pressure || 0} mb</span>
                </div>
            </div>
        </div>
    )
}

export default Weather;