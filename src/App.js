import { useEffect, useState } from "react";
import "./assets/global.css";
import TopButtons from "./components/form/TopButtons/TopButtons";
import Inputs from "./components/form/Inputs/Inputs";
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
      await getFormattedWeatherData({ ...query, units: units }, units).then((data) => {
        setWeather(data);
      });
    };
    fetchWeather();
  }, [query, units]);
  console.log("all data collected until now: ", weather);
  console.log("units in app.jsx: ", units)

  const formatBackground = () => {
    if(!weather) return 'b-default'
    const limit = units  === 'metric' ? 20 : 60;
    if(weather.temp <= limit){
      console.log("default")
      return 'b-default';
    }
    return 'b-hot';
  }

  return (
    <div className={`App`} id={`${formatBackground()}`}>
      <TopButtons setQuery={setQuery}></TopButtons>
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits}></Inputs>
      {weather && (
        <>
          <TimeAndLocation weather = {weather}></TimeAndLocation>
          <TemperatureAndDetails weather = {weather}></TemperatureAndDetails>
          <Forecast forecastData={weather.hourlyForecast} title="hourly forecast"></Forecast>
          <Forecast forecastData={weather.dailyForecast} title="daily forecast"></Forecast>
        </>
      )}
    </div>
  );
}

export default App;

