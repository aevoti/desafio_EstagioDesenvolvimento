import React from 'react';

function Button(props) {
    return <button type={props.type} onClick={props.onClick}>Submit</button>
}

export default Button;