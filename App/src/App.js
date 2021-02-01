import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './style.css';

import WeatherIcon from './components/WeatherIcon';
import SearchWeather from './components/SearchWeather';
import LocationDate from './components/LocationDate';
import Weather from './components/Weather';

function App() {
    const [cityName, setCity] = useState('');
    const [regionName, setRegion] = useState('');
    const [location, setLocation] = useState({});
    const [current, setCurrent] = useState({});

    const handleCityInput = e => {
        setCity(e.target.value)
    }

    const handleRegionInput = e => {
        setRegion(e.target.value)
    }

    const weatherSearch = (e, city, region) => {
        e.preventDefault();
        const url = `http://api.weatherstack.com/current`;

        axios.get('http://localhost:8080/key')
        .then(res => res.data)
        .then(data => ({
                    access_key: data.accessKey,
                    query: `${city}, ${region}`
                }
            )
        )
        .then(params => {
            axios.get(url, { params })
            .then(res => {
                console.log(res)
                setCurrent({ ...res.data.current })
                setLocation({ ...res.data.location })
            })
        })
    }

    const city = { name: cityName, handleCityInput };
    const region = { name: regionName, handleRegionInput }
    
    return (
        <div className="container">
            <SearchWeather 
                className="search" 
                city={city} 
                region={region} 
                onSubmit={e => weatherSearch(e, cityName, regionName)} 
            />

            <div className="weather-panel">
                <LocationDate className="panel-top" location={location} />
                <WeatherIcon className="panel-mid" current={current} />
                <Weather className="panel-bottom" current={current} /> 
            </div>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('app'));