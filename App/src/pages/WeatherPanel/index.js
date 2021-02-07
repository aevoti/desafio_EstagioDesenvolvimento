import React from 'react';

import './style.css';
import LocationDate from '../../components/LocationDate';
import Weather from '../../components/Weather';

function WeatherPanel(props) {
    return (
        <div className="weather-panel">
                <LocationDate className="panel-top" location={props.location} />
                <Weather className="panel-bottom" current={props.current} /> 
        </div>
    )
}

export default WeatherPanel;