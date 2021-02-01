import React from 'react';

function Weather(props) {
    return (
        <div className={props.className}>
            <span className="temperature">{props.current.temperature}</span>
            <span className="statistics">
                Wind: {props.current.wind_speed}
                Precip: {props.current.precip}
                Pressure: {props.current.pressure}
            </span>
        </div>
    )
}

export default Weather;