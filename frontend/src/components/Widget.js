import { WiRaindrop, WiHumidity, WiWindy } from "react-icons/wi";
import { MdDelete } from "react-icons/md";

import getIcon from "../util/getIcon";

import "../styles/components/widget.css";

function Widget({
  name,
  temperature,
  feelslike,
  code,
  isDay,
  description,
  precip,
  humidity,
  windSpeed,
  deleteLocation,
}) {
  return (
    <div className="widget">
      <div className="top">
        <div>
          <h2 className="name">{name}</h2>
          <h1 className="temperature">{temperature}º</h1>
          <h4>Feels Like {feelslike}º</h4>
        </div>
        <div className="topLeft">
          <h3>{description}</h3>
          {getIcon(code, isDay)}
        </div>
      </div>
      <div className="details">
        <div className="detailsRight">
          <div className="info">
            <WiRaindrop size={22} />
            <h4>Precipitation {precip}%</h4>
          </div>
          <div className="info">
            <WiHumidity size={22} />
            <h4>Humidity {humidity}%</h4>
          </div>
          <div className="info">
            <WiWindy size={22} />
            <h4>Wind {windSpeed} km/h</h4>
          </div>
        </div>
        <button className="delete" onClick={() => deleteLocation(name)}>
          <MdDelete size={24} color="#ffffff" />
        </button>
      </div>
    </div>
  );
}

export default Widget;
