import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';
import Button from '../Button';

function Header(props) {
    return (
        <header>
            <Link to="/"><h1>Weather API</h1></Link>
            <Link to="/history"><Button onClick={props.fetchData} text="History" /></Link>
        </header>
    )
}

export default Header;