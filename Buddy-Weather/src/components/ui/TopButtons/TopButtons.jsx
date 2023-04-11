import React from "react";
import "./TopButtons.css";

function TopButtons({setQuery}) {
  const cities = [
    {
      id: 1,
      title: "Bucharest",
    },
    {
      id: 2,
      title: "London",
    },
    {
      id: 3,
      title: "Budapest",
    },
    {
      id: 4,
      title: "Tokyo",
    },
    {
      id: 5,
      title: "Madrid",
    },
  ];

  return (
    <div className="top-btns-container">
      {cities.map((city) => (
        <button className="top-btn" key={city.id} onClick={() => setQuery({q: city.title})}>
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
