import React from 'react';

import './style.css';

function Figure(props) {
    return (
        <figure className={props.className}>
            <img src={props.current.weather_icons}/>
            <figcaption>{props.current.weather_descriptions}</figcaption>
        </figure>
    )
}

export default Figure;