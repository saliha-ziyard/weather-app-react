import React, { useState , useEffect} from 'react'

import {BsSearch} from 'react-icons/bs'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import TimeAndDate from '../components/TimeAndDate'
import CurrentocationWeather from '../components/CurrentocationWeather'
import '../stylesheets/WeatherData.css'
import ForcastWeather from '../components/ForcastWeather'

function WeatherData() {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);


    const [forecastDailyData ,setForecastDailyData] = useState([]);

    const [forcastDaily, setForcastDaily] = useState([]);
    const API_KEY = '563740045cb76426ecdf205e835f7c34';
    const [dailyForecast, setDailyForecast] = useState([]);


    // const handleSearchChange = (searchData) => { console.log(searchData)}


    const getWeatherData = async () => {
        try {
        
          //current
          const currentResponse = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
          );
          const currentData = await currentResponse.json();
          
          
          const forcastResponse = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
          );
          const forcastData = await forcastResponse.json();
          // console.log(forcastData.list);

         

          setWeatherData(currentData);
          // setForecastDailyData(coming7days);
          // setForecastDailyData({city: searchData.label,...forcastData});
          setForecastDailyData(forcastData);
          // console.log(forcastData);

        } catch (error) {
          console.error('Error fetching weather data:', error);
        }
      };


  return (
    <div className='weather'>
    <div className='weather-search'>
        <input type='text' placeholder='Search for City'
        ////
        // onSearchChange = {handleSearchChange}
        value={city}
        onChange={(e) => setCity(e.target.value)}/>
        <BsSearch size={25} onClick={getWeatherData}/>
        <HiOutlineLocationMarker size={25}/>
    </div>

    {/* current date and time */}
    <div className='weather-date-today'>
    <TimeAndDate/>
    </div>

    <div className='city-weather'>
    <div className='weather-current'>
      {/* current weather in current location */}
    <CurrentocationWeather/>
    </div>

    <div className='weather-search-result'>
    {weatherData && (
        <div>
        {/* <p>{new Date(weatherData.dt * 1000).toLocaleString()}</p> */}
        <h2>Weather in {weatherData.name}, {weatherData.sys.country}</h2>
        <p>Temperature: {weatherData.main.temp}°C</p>
        <p>Humidity: {weatherData.main.humidity}°C </p>
        <p>Weather: {weatherData.weather[0].description}</p>
        <p><img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt="Weather Icon" /></p>
       
      </div>
    )}
    </div>
    </div>

    <ForcastWeather data={forecastDailyData}/>
   
    </div>
    
  );
}

export default WeatherData