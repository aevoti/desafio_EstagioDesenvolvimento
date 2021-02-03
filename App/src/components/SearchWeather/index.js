import React from 'react';
import Input from '../Input';
import Button from '../Button';

import './style.css';

function SearchWeather(props) {
    return (
        <form className={props.className} onSubmit={props.onSubmit}>
            <Input value={props.city.name} onChange={props.city.handleCityInput} placeholder="City"/>
            <Input value={props.region.name} onChange={props.region.handleRegionInput} placeholder="Region" />
            <Button type="submit" text="Search"/>
        </form>
    )
}

export default SearchWeather;