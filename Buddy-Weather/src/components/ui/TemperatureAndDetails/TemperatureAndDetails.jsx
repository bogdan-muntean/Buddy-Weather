import React from "react";
import "./TemperatureAndDetails.css";
import { formatToLocalTime } from "../../../data/weatherData";
import {
  UilSun,
  UilSunset,
  UilArrowDown,
  UilArrowUp,
} from "@iconscout/react-unicons";
import ImagePrincipal from "../../../../public/weather-img-code/day/Clear-clear_sky.64.png";
import Thermometer from "../../../assets/weather-images/Thermometer.png";
import Wind from "../../../assets/weather-images/Wind.png";
import Droplets from "../../../assets/weather-images/Droplets.png";

function TemperatureAndDetails({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) {
  return (
    <div className="temp-detail-container">
      <div className="detail">
        <p>
        {details}
        </p>
      </div>
      <div className="temp-container">
        <div
          className="temp-icon-principal"
          style={{ backgroundImage: `url(${ImagePrincipal})` }}
        ></div>
        <p className="temp-temperature">{`${temp.toFixed()}°`}</p>
        <div className="temp-bonus-container">
          <div className="temp-bonus-item">
            <div
              className="temp-bonus-image"
              style={{ backgroundImage: `url(${Thermometer})` }}
            ></div>
            <p>
              Real fell: <span className="temp-bonus-item-span">{`${feels_like.toFixed()}°`}</span>
            </p>
          </div>
          <div className="temp-bonus-item">
            <div
              className="temp-bonus-image"
              style={{ backgroundImage: `url(${Droplets})` }}
            ></div>
            <p>
              Humidity: <span className="temp-bonus-item-span">{`${humidity}%`}</span>
            </p>
          </div>
          <div className="temp-bonus-item">
            <div
              className="temp-bonus-image"
              style={{ backgroundImage: `url(${Wind})` }}
            ></div>
            <p>
              Wind: <span className="temp-bonus-item-span">{`${speed.toFixed()} km/h`}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="edges-container">
        <div className="edge-item">
          <UilSun></UilSun>
          <p className="edge-item-text">
            Rise: <span className="edge-value">{formatToLocalTime(sunrise, timezone, "hh:mm")}</span>
          </p>
        </div>
        <div className="edge-item">
          <UilSunset></UilSunset>
          <p className="edge-item-text">
            Set: <span className="edge-value">{formatToLocalTime(sunset, timezone, "hh:mm")}</span>
          </p>
        </div>
        <div className="edge-item">
          <UilArrowDown></UilArrowDown>
          <p className="edge-item-text">
            High: <span className="edge-value">{`${temp_max.toFixed()}°`}</span>
          </p>
        </div>
        <div className="edge-item">
          <UilArrowUp></UilArrowUp>
          <p className="edge-item-text">
            Low: <span className="edge-value">{`${temp_min.toFixed()}°`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TemperatureAndDetails;
