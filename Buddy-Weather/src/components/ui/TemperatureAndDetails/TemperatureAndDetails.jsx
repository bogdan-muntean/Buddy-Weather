import React from "react";
import "./TemperatureAndDetails.css";
import {
  UilSun, UilSunset, UilArrowDown, UilArrowUp
} from "@iconscout/react-unicons";
import ImageSun from "../../../assets/weather-images/Sun.png";
import Thermometer from "../../../assets/weather-images/Thermometer.png";
import Wind from "../../../assets/weather-images/Wind.png";
import Droplets from "../../../assets/weather-images/Droplets.png";

function TemperatureAndDetails() {
  return (
    <div className="temp-detail-container">
      <div className="detail">Sunny</div>
      <div className="temp-container">
        <div
          className="temp-icon-principal"
          style={{ backgroundImage: `url(${ImageSun})` }}
        ></div>
        <div className="temp-temperature">33°</div>
        <div className="temp-bonus-container">
          <div className="temp-bonus-item">
            <div
              className="temp-bonus-image"
              style={{ backgroundImage: `url(${Thermometer})` }}
            ></div>
            <p>
              Real fell: <span className="temp-bonus-item-span">32°</span>
            </p>
          </div>
          <div className="temp-bonus-item">
            <div
              className="temp-bonus-image"
              style={{ backgroundImage: `url(${Droplets})` }}
            ></div>
            <p>
              Humidity: <span className="temp-bonus-item-span">35%</span>
            </p>
          </div>
          <div className="temp-bonus-item">
            <div
              className="temp-bonus-image"
              style={{ backgroundImage: `url(${Wind})` }}
            ></div>
            <p>
              Wind: <span className="temp-bonus-item-span">10 km/h</span>
            </p>
          </div>
        </div>
      </div>
      <div className="edges-container">
        <div className="edge-item">
          <UilSun></UilSun>
          <p className="edge-item-text">Rise: <span className="edge-value">06:00</span></p>
        </div>
        <div className="edge-item">
          <UilSunset></UilSunset>
          <p className="edge-item-text">Set: <span className="edge-value">18:00</span></p>
        </div>
        <div className="edge-item">
          <UilArrowDown></UilArrowDown>
          <p className="edge-item-text">High: <span className="edge-value">34°</span></p>
        </div>
        <div className="edge-item">
          <UilArrowUp></UilArrowUp>
          <p className="edge-item-text">Low: <span className="edge-value">25°</span></p>
        </div>
      </div>
    </div>
  );
}

export default TemperatureAndDetails;
