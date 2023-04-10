import { DateTime } from "luxon";

const API_KEY = "43975e5e5a38035d9a4bd44dff2378d3";
const BASE_URL = "https://api.openweathermap.org/data/2.5";
//https://open-meteo.com/
const OPEN_METEO = "https://api.open-meteo.com/v1/forecast";

//functiile GET
const getCurrentWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
  console.log("url currentWeather: ", url);
  return fetch(url).then((res) => res.json());
};

const getForecastWeatherData = (searchParams) => {
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
  const localTimeText = formatCurrentLocalTime(dt)

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
    localTimeText
  };
};

const formatForecastWeather = (data) => {
  console.log("forecast data: ", data);
  let {
    timezone,
    daily: { time: time_d, weathercode: weathercode_d, temperature_2m_max },
    hourly: { time: time_h, weathercode: weathercode_h, temperature_2m },
    current_weather: { time: currentTime },
  } = data;

  let startIndexHour = time_h.indexOf(`${currentTime}`);
  let startIndexDay = time_d.indexOf(
    DateTime.fromISO(`${currentTime}`).toFormat("yyyy-MM-dd")
  );
  console.log("startIndexHour: ", startIndexHour, + "; startIndexDay: ", startIndexDay);
  //Incepem indexHour de la minim 1, pentru ca 0 avem deja, este ora curenta.
  //startIndexHour si Day sunt pentru a putea alege alt range pe viitor daca user-ul doreste 
  //sa vada un range custom.
  let dailyForecast = time_d
    .slice(startIndexDay + 1, startIndexDay + 9)
    .map((day, index) => {
      return {
        title: formatForecastTime(day, timezone, "ccc"),
        temp: temperature_2m_max[startIndexDay + index],
        icon: weathercode_d[startIndexDay + index],
      };
    });
  let hourlyForecast = time_h
    .slice(startIndexHour + 1, startIndexHour + 9)
    .map((hour, index) => {
      return {
        title: formatForecastTime(hour, timezone, "hh:mm"),
        temp: weathercode_h[startIndexHour + index],
        icon: temperature_2m[startIndexHour + index],
      };
    });
  return { timezone, dailyForecast, hourlyForecast };
};

//Functia ce ofera datele prelucrate catre App
const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getCurrentWeatherData(
    "weather",
    searchParams
  ).then((data) => formatCurrentWeather(data));

  const { lat: latitude, lon: longitude } = formattedCurrentWeather;
  console.log("latitude and longitude: ", latitude, longitude);

  const formattedForecastWeather = await getForecastWeatherData({
    latitude,
    longitude,
    temperature_unit: "celsius",
    timezone: "auto",
    forecast_days: 7,
    current_weather: true,
    hourly: ["temperature_2m", "weathercode"],
    daily: ["temperature_2m_max", "weathercode"],
  }).then((data) => formatForecastWeather(data));

  return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

//formate pentru timp, creat cu luxon
const formatForecastTime = (time, zone, format) =>
  DateTime.fromISO(time).setZone(zone).toFormat(format);

const formatCurrentLocalTime = (
  dt,
  zone,
  format = "cccc, dd LLL yyyy' | Ora locala: 'hh:mm"
) => DateTime.fromSeconds(dt).setZone(zone).toFormat(format);

//url for icons
// const iconUrlFromCode

export default getFormattedWeatherData;
