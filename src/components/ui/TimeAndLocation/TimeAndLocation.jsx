import React from "react";
import "./TimeAndLocation.css";
import { formatToLocalTime } from "../../../data/weatherData";

function TimeAndLocation({weather: {dt, timezone, name, country}}) {
  return (
    <div className="time-location-container">
      <div className="location">
        <p>{`${name}, ${country}`}</p>
      </div>
      <div className="date-hour">
        <p>{`${formatToLocalTime(dt, timezone, "cccc, dd LLL yyyy' | Local hour  'HH:mm")}`}</p>
      </div>
      
    </div>
  );
}

export default TimeAndLocation;
