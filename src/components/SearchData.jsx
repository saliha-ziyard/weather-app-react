import React from 'react'
import WeatherData from '../pages/WeatherData'

function SearchData() {
  return (
    <div className='searchData'>
        <div className='searchData-name'>
            <h3>{WeatherData.name}</h3>
            <p>{WeatherData.weather[0].description}</p>
        </div>

        <div className='searchData-data'>
            <img src='https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png'/>
            <p>{WeatherData.main.temp}°C</p>
        </div>


        
    </div>
  )
}

export default SearchData