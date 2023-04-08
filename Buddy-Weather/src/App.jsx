import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './assets/global.css'
import TopButtons from './components/ui/TopButtons/TopButtons'
import Inputs from './components/ui/Inputs/Inputs'
import TimeAndLocation from './components/ui/TimeAndLocation/TimeAndLocation'

function App() {
  return (
    <div className="App">
      <TopButtons></TopButtons>
      <Inputs></Inputs>
      <TimeAndLocation></TimeAndLocation>
    </div>
  )
}

export default App
