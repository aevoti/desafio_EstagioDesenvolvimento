import React from 'react';

import './style.css';

function Button(props) {
    return <button type={props.type} onClick={props.onClick}>Submit</button>
}

export default Button;