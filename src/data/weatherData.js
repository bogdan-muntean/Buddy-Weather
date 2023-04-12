import { DateTime } from "luxon";
import checkIconWeatherCode from "../utils/checkIconWeatherCode";

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

const getForecastWeatherData = (searchParams, unitTemperature) => {
  const url = new URL(OPEN_METEO + "/");
  url.search = new URLSearchParams({ ...searchParams, unitTemperature });
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
    units,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;

  const { main: details } = weather[0];

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
    units,
    country,
    sunrise,
    sunset,
    speed,
    details,
  };
};

const formatForecastWeather = (data) => {
  console.log("forecast data: ", data);
  let {
    timezone,
    current_weather: {
      time: currentTime,
      weathercode: weathercode_current,
      is_day: is_day_current,
    },
    hourly: {
      time: time_h,
      weathercode: weathercode_h,
      temperature_2m,
      is_day: is_day_h,
    },
    daily: { time: time_d, weathercode: weathercode_d, temperature_2m_max },
  } = data;

  let startIndexHour = time_h.indexOf(`${currentTime}`);
  let startIndexDay = time_d.indexOf(
    DateTime.fromISO(`${currentTime}`).toFormat("yyyy-MM-dd")
  );
  console.log(
    "startIndexHour: " + startIndexHour + "; startIndexDay: " + startIndexDay
  );
  //Incepem indexHour de la minim 1, pentru ca 0 avem deja, este ora curenta.
  //startIndexHour si Day sunt pentru a putea alege alt range pe viitor daca user-ul doreste
  //sa vada un range custom.
  let dailyForecast = time_d
    .slice(startIndexDay + 1, startIndexDay + 7)
    .map((day, i) => {
      let checkIconProps = checkIconWeatherCode(
        weathercode_d[startIndexDay + i],
        1
      );
      return {
        title: formatForecastTime(day, timezone, "ccc"),
        temp: temperature_2m_max[startIndexDay + i],
        checkIconProps,
        iconCode: weathercode_d[startIndexDay + i],
        is_day: 1,
      };
    });
  let hourlyForecast = time_h
    .slice(startIndexHour, startIndexHour + 24)
    .map((hour, i) => {
      let checkIconProps = checkIconWeatherCode(
        weathercode_h[startIndexHour + i],
        is_day_h[startIndexHour + i]
      );
      return {
        title: formatForecastTime(hour, timezone, "HH:mm"),
        temp: temperature_2m[startIndexHour + i],
        checkIconProps,
        iconCode: weathercode_h,
        is_day: is_day_h[startIndexHour + i],
      };
    });
  return {
    timezone,
    weathercode_current,
    is_day_current,
    dailyForecast,
    hourlyForecast,
  };
};

//Functia ce ofera datele prelucrate catre App
const getFormattedWeatherData = async (searchParams, unitTime) => {
  //Am adaptat metoda de masurare de la OpenWeather la OpenMeteo
  const formattedCurrentWeather = await getCurrentWeatherData(
    "weather",
    searchParams,
  ).then((data) => formatCurrentWeather(data));

  const { lat: latitude, lon: longitude } = formattedCurrentWeather;
  console.log("latitude and longitude: ", latitude, longitude);
  console.log(unitTime)
  if (unitTime == "metric") {
    unitTime = "celsius";
  } else if (unitTime == "imperial") {
    unitTime = "fahrenheit";
  }

  const formattedForecastWeather = await getForecastWeatherData({
    latitude,
    longitude,
    temperature_unit: `${unitTime}`,
    timezone: "auto",
    forecast_days: 7,
    current_weather: true,
    is_day: true,
    hourly: ["temperature_2m", "weathercode", "is_day"],
    daily: ["temperature_2m_max", "weathercode"],
  }).then((data) => formatForecastWeather(data));

  return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

//formate pentru timp, creat cu luxon
const formatForecastTime = (time, zone, format) =>
  DateTime.fromISO(time).setZone(zone).toFormat(format);

const formatToLocalTime = (dt, zone, format) =>
  DateTime.fromSeconds(dt).setZone(zone).toFormat(format);

export default getFormattedWeatherData;

export { formatToLocalTime };
