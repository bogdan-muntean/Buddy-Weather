import React from "react";
import "./Forecast.css";
import ImageSun from '../../../assets/weather-images/Sun.png'

function Forecast() {
  return (
    <div className="forecast-container">
      <div className="forecast-title">
        <p className="forecast-title-text">Prognoza Orei</p>
      </div>
      <hr className="forecast-line-break"></hr>
      <div className="forecast-timestamp-container">
        <div className="forecast-timestamp-item">
          <p className="forecast-timestamp-item-title">15:00</p>
          <div
            className="forecast-timestamp-item-image"
            style={{ backgroundImage: `url(${ImageSun})` }}
          ></div>
          <p className="forecast-timestamp-item-temperature">30°</p>
        </div>
        <div className="forecast-timestamp-item">
          <p className="forecast-timestamp-item-title">15:00</p>
          <div
            className="forecast-timestamp-item-image"
            style={{ backgroundImage: `url(${ImageSun})` }}
          ></div>
          <p className="forecast-timestamp-item-temperature">30°</p>
        </div>
        <div className="forecast-timestamp-item">
          <p className="forecast-timestamp-item-title">15:00</p>
          <div
            className="forecast-timestamp-item-image"
            style={{ backgroundImage: `url(${ImageSun})` }}
          ></div>
          <p className="forecast-timestamp-item-temperature">30°</p>
        </div>
        <div className="forecast-timestamp-item">
          <p className="forecast-timestamp-item-title">15:00</p>
          <div
            className="forecast-timestamp-item-image"
            style={{ backgroundImage: `url(${ImageSun})` }}
          ></div>
          <p className="forecast-timestamp-item-temperature">30°</p>
        </div>
        <div className="forecast-timestamp-item">
          <p className="forecast-timestamp-item-title">15:00</p>
          <div
            className="forecast-timestamp-item-image"
            style={{ backgroundImage: `url(${ImageSun})` }}
          ></div>
          <p className="forecast-timestamp-item-temperature">30°</p>
        </div>
        <div className="forecast-timestamp-item">
          <p className="forecast-timestamp-item-title">15:00</p>
          <div
            className="forecast-timestamp-item-image"
            style={{ backgroundImage: `url(${ImageSun})` }}
          ></div>
          <p className="forecast-timestamp-item-temperature">30°</p>
        </div>
        <div className="forecast-timestamp-item">
          <p className="forecast-timestamp-item-title">15:00</p>
          <div
            className="forecast-timestamp-item-image"
            style={{ backgroundImage: `url(${ImageSun})` }}
          ></div>
          <p className="forecast-timestamp-item-temperature">30°</p>
        </div>
      </div>
    </div>
  );
}

export default Forecast;
