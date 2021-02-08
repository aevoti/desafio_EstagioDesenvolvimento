import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import getWSData from "../services/weatherstack";

import FormInput from "../components/FormInput";
import Widget from "../components/Widget";

import "../styles/pages/home.css";

function Home({ setToken, authenticated }) {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    async function fetchData() {
      if (authenticated) {
        const userLocations = await axios
          .get("location")
          .then((res) => res.data)
          .catch((err) => {
            console.err(err.response.data.message);
          });

        if (userLocations) {
          const data = await getWSData(userLocations);
          setLocations(data);
        }
      }
    }
    fetchData();
  }, [authenticated]);

  // função passada para o componente FormInput
  function addLocation(newLocation) {
    setLocations([...locations, newLocation]);
  }

  // função passada para o componente Widget
  async function deleteLocation(name) {
    await axios
      .delete(`location?name=${name}`)
      .catch((err) => console.error(err));

    setLocations(
      locations.filter((location) => location.location.name !== name)
    );
  }

  function logout() {
    setLocations([]);
    setToken("");
  }

  return (
    <div className="home-container">
      <div className="header">
        <nav>
          <ul>
            {authenticated ? (
              <li onClick={logout}>Logout</li>
            ) : (
              <>
                <li>
                  <Link to="/signin">Sign in</Link>
                </li>
                <li>
                  <Link to="/signup">Sign up</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
        <FormInput addLocation={addLocation} />
      </div>

      <div className="widgets">
        {locations.map(({ current, location }) => (
          <Widget
            key={location.name}
            name={location.name}
            temperature={current.temperature}
            feelslike={current.feelslike}
            code={current.weather_code}
            isDay={current.is_day}
            description={current.weather_descriptions[0]}
            precip={current.precip}
            humidity={current.humidity}
            windSpeed={current.wind_speed}
            deleteLocation={deleteLocation}
          />
        ))}
        {!authenticated && (
          <h3 className="widgets-title">
            Create your account or log in to add locations
          </h3>
        )}
        {authenticated && locations.length === 0 && (
          <h3 className="widgets-title">
            Locations haven't added yet
          </h3>
        )}
      </div>
    </div>
  );
}

export default Home;
