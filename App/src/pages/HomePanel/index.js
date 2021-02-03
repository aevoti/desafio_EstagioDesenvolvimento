import React from 'react';

import './style.css';

function HomePanel(props) {
    return (
        <div className={props.className}>
            <h1>Welcome to Weather API</h1>
            <h2>
                Retrieve instant, accurate weather information for 
                any location in the world
            </h2>
        </div>
    )
}

export default HomePanel;