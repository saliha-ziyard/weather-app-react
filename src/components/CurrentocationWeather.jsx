import React, { useEffect, useState } from 'react'
import WeatherData from '../pages/WeatherData';

function CurrentocationWeather() {

    const [currentLocationWeather, setCurrentLocationWeather] = useState(null);
    const API_KEY = '563740045cb76426ecdf205e835f7c34';

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            async(position) => {
                const {latitude, longitude} = position.coords;

                try{
                    const response = await fetch(
                        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
                    );
                    const data = await response.json();
                    setCurrentLocationWeather(data);
                }
                catch (error){
                    console.error ("Error in fetching current weather" , error);
                }

            },  (error) => {
                console.error("Error getting location:", error);
            }
        );
    } ,[]);

  return (
    <div className='currentocationWeather'>
        {currentLocationWeather ? (
            <div>
                <h2>Current Weather in {currentLocationWeather.name}</h2>
                <p>Location: {currentLocationWeather.name}, {currentLocationWeather.sys.country}</p>
                <p>Temperature: {currentLocationWeather.main.temp}°C</p>
                <p>Humidity: {currentLocationWeather.main.humidity}°C </p>
            </div>
        ): (
            <p>Loading weather data...</p>
        )}
    </div>
  );
}

export default CurrentocationWeather