import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './style.css';
import './global.css';

import SearchWeather from './components/SearchWeather';
import Header from './components/Header';
import WeatherPanel from './pages/WeatherPanel';
import ErrorPanel from './pages/ErrorPanel';
import HomePanel from './pages/HomePanel';

function App() {
    const [cityName, setCity] = useState('');
    const [regionName, setRegion] = useState('');
    const [location, setLocation] = useState({});
    const [current, setCurrent] = useState({});
    const [redirect, setRedirect] = useState(null);

    useEffect(() => {
        console.log(redirect)
        setRedirect(null);
    }, [redirect])

    const handleCityInput = e => {
        setCity(e.target.value)
    }

    const handleRegionInput = e => {
        setRegion(e.target.value)
    }

    const searchWeather = (e, city, region) => {
        e.preventDefault();
        const url = `http://api.weatherstack.com/current`;

        axios.get('http://localhost:8080/key')
        .then(res => res.data)
        .then(data => ({
                access_key: data.accessKey,
                query: `${city}, ${region}`
            })
        )
        .then(params => {
            axios.get(url, { params })
            .then(res => {
                console.log(res)
                if(res.data.success === false) {
                    setRedirect('/erro')
                }

                else {
                    setCurrent({ ...res.data.current })
                    setLocation({ ...res.data.location })
                    setRedirect('/weather')
                }
            })
        })
    }

    const city = { name: cityName, handleCityInput };
    const region = { name: regionName, handleRegionInput }
    
    return (
        <Router>
            {redirect ? <Redirect to={redirect}/> : ''}
            <Header />
            <div className="container">
                <SearchWeather 
                    className="search" 
                    city={city} 
                    region={region} 
                    onSubmit={e => searchWeather(e, cityName, regionName)} 
                />

                <div className="weather-container">
                    <Switch>
                        <Route exact path="/">
                            <HomePanel className="home" />
                        </Route>
                        <Route path="/weather">
                            <WeatherPanel current={current} location={location} />
                        </Route>

                        <Route path="/erro">
                            <ErrorPanel className="error" />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

ReactDOM.render(<App/>, document.getElementById('app'));