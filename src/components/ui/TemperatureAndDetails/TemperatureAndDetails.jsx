import React from "react";
import "./TemperatureAndDetails.css";
import checkIconWeatherCode from "../../../utils/checkIconWeatherCode";

import { formatToLocalTime } from "../../../data/weatherData";
import {
  UilSun,
  UilSunset,
  UilArrowDown,
  UilArrowUp,
} from "@iconscout/react-unicons";
import Thermometer from "../../../assets/weather-images/Thermometer.png";
import Wind from "../../../assets/weather-images/Wind.png";
import Droplets from "../../../assets/weather-images/Droplets.png";
// import { url } from "inspector";

function TemperatureAndDetails({
  weather: {
    details,
    weathercode_current,
    is_day_current,
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

  const weatherPropsCurrent = checkIconWeatherCode(weathercode_current, is_day_current)
  console.log(weatherPropsCurrent)

  return (
    <div className="temp-detail-container">
      <div className="detail">
        <p>
        {weatherPropsCurrent.description}
        </p>
      </div>
      <div className="temp-container">
        <div
          className="temp-icon-principal"
          // style={{ backgroundImage: `url(./weather-img-code/${weatherPropsCurrent.day}/${weatherPropsCurrent.icon}.png)` }}
          style={{ backgroundImage: `url(weather-img-code/${weatherPropsCurrent.day}/${weatherPropsCurrent.icon}.png)` }}
          // style={{ backgroundImage: `url(../../../../../assets/weather-img-code/${weatherPropsCurrent.day}/${weatherPropsCurrent.icon}.png)` }}
          // style={{ backgroundImage: `url(../../../../../../public/assets/weather-img-code/${weatherPropsCurrent.day}/${weatherPropsCurrent.icon}.png)` }}
        ></div>
        <p className="temp-temperature">{`${temp.toFixed()}°`}</p>
        <div className="temp-bonus-container">
          <div className="temp-bonus-item">
            <div
              className="temp-bonus-image"
              style={{ backgroundImage: `url(${Thermometer})` }}
            ></div>
            <p className="temp-bonus-paragraph">
              Real fell: <span className="temp-bonus-item-span">{`${feels_like.toFixed()}°`}</span>
            </p>
          </div>
          <div className="temp-bonus-item">
            <div
              className="temp-bonus-image"
              style={{ backgroundImage: `url(${Droplets})` }}
            ></div>
            <p className="temp-bonus-paragraph">
              Humidity: <span className="temp-bonus-item-span">{`${humidity}%`}</span>
            </p>
          </div>
          <div className="temp-bonus-item">
            <div
              className="temp-bonus-image"
              style={{ backgroundImage: `url(${Wind})` }}
            ></div>
            <p className="temp-bonus-paragraph">
              Wind: <span className="temp-bonus-item-span">{`${speed.toFixed()} km/h`}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="edges-container">
        <div className="edge-item">
          <UilSun></UilSun>
          <p className="edge-item-text">
            Rise: <span className="edge-value">{formatToLocalTime(sunrise, timezone, "HH:mm")}</span>
          </p>
        </div>
        <div className="edge-item">
          <UilSunset></UilSunset>
          <p className="edge-item-text">
            Set: <span className="edge-value">{formatToLocalTime(sunset, timezone, "HH:mm")}</span>
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
