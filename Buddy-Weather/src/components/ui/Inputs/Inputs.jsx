import React from 'react'
import './Inputs.css'
import { UilSearchAlt, UilLocationPinAlt } from '@iconscout/react-unicons'

function Inputs() {
  return (
    <div className='inputs-container'>
        <div className='search-container'>
            <input className='search-bar' type='text' placeholder='Cauta orasul...'></input>
            <UilSearchAlt className='search-icon' size={30} id='first-icon'></UilSearchAlt>
            <UilLocationPinAlt className='search-icon' size={30}></UilLocationPinAlt>
        </div>
    </div>
  )
}

export default Inputs