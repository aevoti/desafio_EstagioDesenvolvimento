import React from 'react';

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