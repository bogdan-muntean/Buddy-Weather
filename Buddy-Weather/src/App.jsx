import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './assets/global.css'
import TopButtons from './components/ui/TopButtons/TopButtons'
import Inputs from './components/ui/Inputs/Inputs'
import TimeAndLocation from './components/ui/TimeAndLocation/TimeAndLocation'
import TemperatureAndDetails from './components/ui/TemperatureAndDetails/TemperatureAndDetails'
import Forecast from './components/ui/Forecast/Forecast' 
import getFormattedWeatherData from './data/weatherData'

function App() {
  const fetchWeather = async () => {
    const data = await getFormattedWeatherData({q: 'london'});
    console.log(data);
  }
  fetchWeather()

  return (
    <div className="App">
      <TopButtons></TopButtons>
      <Inputs></Inputs>
      <TimeAndLocation></TimeAndLocation>
      <TemperatureAndDetails></TemperatureAndDetails>
      <Forecast></Forecast>
      <Forecast></Forecast>
    </div>
  )
}

export default App
