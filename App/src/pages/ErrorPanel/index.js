import React from 'react';

import './style.css';

function ErrorPanel(props) {
    return(
        <div className={props.className}>
            <h1>Error</h1>
            <p>
                An error has occurred, please try again
            </p>
        </div>
    )
}

export default ErrorPanel;