import React from 'react'

import {BsSearch} from 'react-icons/bs'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import TimeAndDate from '../components/TimeAndDate'
import SearchData from '../components/SearchData'

function WeatherData() {
  return (
    <div className='weather'>
    <div className='weather-search'>
        <input type='text' placeholder='Search for City'/>
        <BsSearch size={25}/>
        <HiOutlineLocationMarker size={25}/>
    </div>
    <div className='weather-date-today'>
    <TimeAndDate/>
    </div>

    <div className='weather-search-data'>
    <SearchData/>
    </div>
    
    </div>
    
  )
}

export default WeatherData