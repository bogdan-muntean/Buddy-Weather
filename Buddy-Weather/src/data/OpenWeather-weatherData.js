import { DateTime } from "luxon";

const API_KEY = "43975e5e5a38035d9a4bd44dff2378d3";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

//functia GET
const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
  console.log(url)
  return fetch(url).then((res) => res.json());
};

//functiile pentru formatarea datelor
const formatCurrentWeather = (data) => {
    console.log(data)
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
    console.log(data)
  let { timezone, daily, hourly } = data;
  //Incepem de la 1 pentru ca 0 avem deja, este ziua curenta.
  daily = daily.slice(1, 5).map((element) => {
    return {
      title: formatToLocalTime(element.dt, timezone, "ccc"),
      temp: element.temp.day,
      icon: element.weather[0],
    };
  });

  hourly = hourly.slice(1, 5).map((element) => {
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

  const { lat, lon } = formattedCurrentWeather;

  const formattedForecastWeather = await getWeatherData("onecall", {
    lat,
    lon,
    // exclude: "current, minutely, alerts",
    // units: searchParams.units,
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
