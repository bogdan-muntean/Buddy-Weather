import React from "react";
import "./Forecast.css";
import ImageSun from "../../../assets/weather-images/Sun.png";

function Forecast({ title, forecastData }) {
  return (
    <div className="forecast-container">
      <div className="forecast-title">
        <p className="forecast-title-text">{title}</p>
      </div>
      <hr className="forecast-line-break"></hr>
      <div className="forecast-timestamp-container">
        {forecastData.map((item) => (
          <div className="forecast-timestamp-item">
            <p className="forecast-timestamp-item-title">{item.title}</p>
            <div
              className="forecast-timestamp-item-image"
              style={{ backgroundImage: `url(${ImageSun})` }}
            ></div>
            <p className="forecast-timestamp-item-temperature">{`${item.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
