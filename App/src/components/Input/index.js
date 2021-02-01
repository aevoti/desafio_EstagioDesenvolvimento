import React from 'react';
import './style.css';

function Input(props) {
    return (
        <input 
            value={props.value} 
            onChange={props.onChange} 
            placeholder={props.placeholder}>
        </input>
    )
}

export default Input;