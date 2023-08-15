import React, { useState } from 'react'

import {BsSearch} from 'react-icons/bs'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import TimeAndDate from '../components/TimeAndDate'
import SearchData from '../components/SearchData'
import Forcast from '../components/Forcast'
import getFormattedWeatherData from '../services/WeatherService'
import CurrentocationWeather from '../components/CurrentocationWeather'

function WeatherData() {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [forecastDailyData ,setForecastDailyData] = useState([]);
    const [forcastDaily, setForcastDaily] = useState([]);
    const API_KEY = '563740045cb76426ecdf205e835f7c34';

    // var icon = weatherData.weather[0].icon;
    // var  iconUrl = 'https://openweathermap.org/img/wn/' + icon + '.png';


    const getWeatherData = async () => {
        try {
          const currentResponse = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
          );
          const currentData = await currentResponse.json();
          
          const forecastResponse = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
          );
          const forecastData = await forecastResponse.json();
      
          const currentDate = new Date();
          const coming7days = forecastData.list.filter(
            item => {
                const itemDate = new Date(item.dt * 1000);
                return itemDate.getDate() !== currentDate.getDate();
            }
          );


          const forcastDaily = [];
          let currentDateForecast = [];
          let currentDateStr = '';

          for(const item of coming7days){
            const itemDateStr = new Date(item.dt * 1000).toDateString();

            if (itemDateStr !== currentDateStr){
                if (currentDateForecast.length > 0){
                    forcastDaily.push(currentDateForecast);
                }
                currentDateForecast = [];
                currentDateStr = itemDateStr;
                
            }
            currentDateForecast.push(item);
          }
          setWeatherData(currentData);
          setForecastDailyData(forcastDaily);
        } catch (error) {
          console.error('Error fetching weather data:', error);
        }
      };


    // const fetchWeather = async () => {
    //     const data = await getFormattedWeatherData({q: "mumbai"});
    //     console.log(data);
    // }

  return (
    <div className='weather'>
    <div className='weather-search'>
        <input type='text' placeholder='Search for City'
        value={city}
        onChange={(e) => setCity(e.target.value)}/>
        <BsSearch size={25} onClick={getWeatherData}/>
        <HiOutlineLocationMarker size={25}/>
    </div>

    {/* current date and time */}
    <div className='weather-date-today'>
    <TimeAndDate/>
    </div>

    {/* current weather in current location */}
    <CurrentocationWeather/>

    {weatherData && (
        <div>
        {/* <p>{new Date(weatherData.dt * 1000).toLocaleString()}</p> */}
        <h2>Weather in {weatherData.name}, {weatherData.sys.country}</h2>
        <p>Temperature: {weatherData.main.temp}°C</p>
        <p>Humidity: {weatherData.main.humidity}°C </p>
        <p>Weather: {weatherData.weather[0].description}</p>
        <p>icon: {weatherData.weather[0].icon}</p>
        {/* <img src={iconUrl}/> */}
      </div>
    )}

    {/* <div className='weather-search-forcast'>
    <Forcast/>
    </div> */}

    {forecastDailyData.length > 0 && (
        <div>
            <h3>Daily weather frocast in {weatherData.name}</h3>
            {forecastDailyData.map((forcastDaily, index) => (
                <div key={index} className='forcast-daily'>
                   {/* <p>{new Date(weatherData.dt * 1000).toLocaleString()}</p> */}
                   <h3>{new Date (forcastDaily[0].dt * 1000).toLocaleString()}</h3>
                   <div className='forcast-items'>
                    {forcastDaily.map((forecast) => (
                        <div key ={forecast.dt} className='forecast-item'>
                            <p>Temperature: {forecast.main.temp}°C</p>
                            <p>Weather: {forecast.weather[0].description}</p>
                        </div>
                    ))}
                   </div>
                </div>                
            ))}
        </div>
    )}




{/* <div className='forcastData'>
                    {forecastData.map((forecast) =>(
                        <div key={forecast.dt} className='forecast-item'>
                            <p>{new Date(forecast.dt* 1000).toLocaleString()}</p>
                            <p>Temperature: {forecast.main.temp}°C</p>
                            <p>Weather: {forecast.weather[0].description}</p>
                        </div>
                    ))}
                    </div> */}
    
    
    </div>
    
  );
}

export default WeatherData