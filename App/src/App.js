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
import HistoryPanel from './pages/HistoryPanel';
import HistoryTableRow from './components/HistoryTableRow';

function App() {
    const [cityName, setCity] = useState('');
    const [regionName, setRegion] = useState('');
    const [location, setLocation] = useState({});
    const [current, setCurrent] = useState({});
    const [redirect, setRedirect] = useState(null);
    const [weatherHistory, setWeatherHistory] = useState([]);

    useEffect(() => {
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
                if(res.data.success === false) {
                    setRedirect('/erro')
                } else {
                    setCurrent({ ...res.data.current })
                    setLocation({ ...res.data.location })
                    post(res.data.location, res.data.current);
                    setRedirect('/weather')
                }
            })
        })
    }

    const fetchHistory = () => {
        axios.get('http://localhost:8080/weather')
        .then(res => { 
            setWeatherHistory([...res.data]);
        })
    }

    const post = (location, current) => {
        const doc = {
            city: location.name,
            region: location.region,
            country: location.country,
            temperature: current.temperature,
            desc: current.weather_descriptions,
            wind: current.wind_speed,
            precip: current.precip,
            pressure: current.pressure,
            localtime: location.localtime_epoch
        }

        axios.post('http://localhost:8080/weather', { data: doc })
    }

    const deleteHistory = id => {
        axios.delete(`http://localhost:8080/weather/${id}`)
        .then(res => fetchHistory())
    }

    const city = { name: cityName, handleCityInput };
    const region = { name: regionName, handleRegionInput }
    const rows = weatherHistory.map(e => <HistoryTableRow key={e._id} element={e.data} delete={() => deleteHistory(e._id)} />)
    
    return (
        <Router>
            {redirect ? <Redirect to={redirect}/> : ''}
            <Header fetchData={fetchHistory}/>
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

                        <Route path="/history"> 
                            <HistoryPanel className="history" rows={rows} />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

ReactDOM.render(<App/>, document.getElementById('app'));