import React from "react";
import "./TimeAndLocation.css";

function TimeAndLocation() {
  return (
    <div className="time-location-container">
      <div className="location">
        <p>Cluj-Napoca, RO</p>
      </div>
      <div className="date-hour">
        <p>Miercuri, 10 Iun 2020 | Ora locala: 15:00</p>
      </div>
      
    </div>
  );
}

export default TimeAndLocation;
