import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./assets/global.css";
import TopButtons from "./components/ui/TopButtons/TopButtons";
import Inputs from "./components/ui/Inputs/Inputs";
import TimeAndLocation from "./components/ui/TimeAndLocation/TimeAndLocation";
import TemperatureAndDetails from "./components/ui/TemperatureAndDetails/TemperatureAndDetails";
import Forecast from "./components/ui/Forecast/Forecast";
import getFormattedWeatherData from "./data/weatherData";

function App() {
  const [query, setQuery] = useState({ q: "bucharest" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };
    fetchWeather();
  }, [query, units]);
  console.log("all data collected: ", weather);

  return (
    <div className="App">
      <TopButtons></TopButtons>
      <Inputs></Inputs>
      {weather && (
        <>
          <TimeAndLocation weather = {weather}></TimeAndLocation>
          <TemperatureAndDetails weather = {weather}></TemperatureAndDetails>
          <Forecast title="Prognoza pe ore"></Forecast>
          <Forecast title="Prognoza pe zile"></Forecast>
        </>
      )}
    </div>
  );
}

export default App;
