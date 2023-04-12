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
      <div className="forecast-timestamp-container" id={`${title == "daily forecast" ? 'daily-f' : ''}`}>
        {forecastData.map((item, index) => (
          <div className="forecast-timestamp-item" key={index}>
            <p className="forecast-timestamp-item-title">{item.title}</p>
            <div
              className="forecast-timestamp-item-image"
              // style={{ backgroundImage: `url(./weather-img-code/${item.checkIconProps.day}/${item.checkIconProps.icon}.png)` }}
              style={{ backgroundImage: `url(../../../../public/assets/weather-img-code/${item.checkIconProps.day}/${item.checkIconProps.icon}.png)` }}
            ></div>
            <p className="forecast-timestamp-item-temperature">{`${item.temp.toFixed()}°`}</p>
            <p className="forecast-timestamp-item-description">{`${item.checkIconProps.description}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
