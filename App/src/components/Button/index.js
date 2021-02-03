import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

function Button(props) {
    return <button type={props.type} onClick={props.onClick}>{props.text}</button>
}

export default Button;