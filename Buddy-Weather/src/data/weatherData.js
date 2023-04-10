import { DateTime } from "luxon";

const API_KEY = "43975e5e5a38035d9a4bd44dff2378d3";
const BASE_URL = "https://api.openweathermap.org/data/2.5";
//https://open-meteo.com/
const OPEN_METEO = "https://api.open-meteo.com/v1/forecast";

//functia GET
const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
  console.log("url currentWeather: ", url);
  return fetch(url).then((res) => res.json());
};

const getWeatherDataOpenMeteo = (searchParams) => {
  const url = new URL(OPEN_METEO + "/");
  url.search = new URLSearchParams({ ...searchParams });
  console.log("url forcastWeather: ", url);
  return fetch(url).then((res) => res.json());
};

//functiile pentru formatarea datelor
const formatCurrentWeather = (data) => {
  console.log("current weather data: ", data);

  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;

  const { main: details, icon } = weather[0];

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    speed,
    details,
    icon,
  };
};

const formatForecastWeather = (data) => {
  console.log("forecast data: ", data);
  let { 
    timezone, 
    daily: {
      time: time_d, 
      weathercode: weathercode_d,
      temperature_2m_max
    }, 
    hourly: {
      time: time_h, 
      weathercode: weathercode_h, 
      temperature_2m},
  } = data;
  //Incepem de la 1 pentru ca 0 avem deja, este ziua curenta.
  daily = time_d.slice(1, 7).map((element) => {
    return {
      title: formatToLocalTime(element.dt, timezone, "ccc"),
      temp: element.temp.day,
      icon: element.weather[0],
    };
  });

  hourly = time_h.slice(1, 7).map((element) => {
    //Incepem de la 1 pentru ca 0 avem deja, este ziua curenta.
    return {
      title: formatToLocalTime(element.dt, timezone, "hh:mm a"),
      temp: element.temp.day,
      icon: element.weather[0],
    };
  });
  return { timezone, daily, hourly };
};

//Functia ce ofera datele prelucrate catre App
const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then((data) => formatCurrentWeather(data));

  const { 
    lat: latitude, 
    lon: longitude 
  } = formattedCurrentWeather;
  console.log("latitude and longitude: ", latitude, longitude);

  const formattedForecastWeather = await getWeatherDataOpenMeteo({
    latitude,
    longitude,
    timezone: "auto",
    forecast_days: 16,
    hourly: ["temperature_2m", "weathercode"],
    daily: ["temperature_2m_max", "weathercode"]
  }).then((data) => formatForecastWeather(data));

  return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

//format creat cu luxon
const formatToLocalTime = (
  sec,
  zone,
  format = "cccc, dd LLL yyyy' | Ora locala: 'hh:mm a"
) => DateTime.fromSeconds(sec).setZone(zone).toFormat(format);

export default getFormattedWeatherData;