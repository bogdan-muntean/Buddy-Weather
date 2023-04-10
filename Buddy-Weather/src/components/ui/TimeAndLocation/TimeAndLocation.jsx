import React from "react";
import "./TimeAndLocation.css";

function TimeAndLocation({weather: {dt, timezone, name, country}}) {
  return (
    <div className="time-location-container">
      <div className="location">
        <p>{`${name}, ${country}`}</p>
      </div>
      <div className="date-hour">
        <p>Miercuri, 10 Iun 2020 | Ora locala: 15:00</p>
      </div>
      
    </div>
  );
}

export default TimeAndLocation;
