
const API_KEY = "563740045cb76426ecdf205e835f7c34"
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}"


// https://api.openweathermap.org/data/2.5/weather?lat=44&lon=55&appid=563740045cb76426ecdf205e835f7c34

// {"coord":{"lon":55,"lat":44},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"base":"stations","main":{"temp":305.42,"feels_like":303.18,"temp_min":305.42,
// "temp_max":305.42,"pressure":1022,"humidity":15,"sea_level":1022,"grnd_level":1003},"visibility":10000,"wind":{"speed":3.57,"deg":116,"gust":3.2},"clouds":{"all":0},
// "dt":1692008879,"sys":{"country":"KZ","sunrise":1691976125,"sunset":1692026862},"timezone":18000,"id":608879,"name":"Mangistauskaya Oblast’","cod":200}


const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL+ "/" +infoType);
    url.search = new URLSearchParams({...searchParams, appid: API_KEY})

    return fetch(url)
    .then((res) => res.json())
    // .then((data) => data);
};

// export default getWeatherData;

//getting only whats needed
const formatCurrentWeather =(data) => {
    const{
        coord : {lat, lon},
        main: {temp, feels_like, temp_min, temp_max, humidity},
        name,
        dt,
        sys: {country, sunrise, sunset},
        weather,
        wind : {speed}
    } = data

    const {main: details, icon } = weather[0]
    return {
        lat, lon, temp, feels_like, temp_min, temp_max, humidity, name, dt,
        country, sunrise, sunset, details, icon, speed
    }
}

const formatForecastWeather = (data) => {
    let {timezone, daily, hourly} = data;
    daily = daily.slice(1,6).map(d => {
        return {
            // title : formatToLocalTime(d.dt, timezone, 'ccc')
            temp: d.temp.day,
            icon: d.weather[0].icon

        }
    });
    return {timezone, daily};
}
const getFormattedWeatherData = async (searchParams) => {

    const formattedCurrentWeather = await getWeatherData(
        'weather', 
        searchParams).
        then(formatCurrentWeather);

        const {lat, lon} = formattedCurrentWeather

        const formattedForcastWeather = await getWeatherData('oncall', {
            lat, lon, exclude : 'current, minutely, alerts', units:searchParams.units
        }).then(formatForecastWeather)

    return {...formattedCurrentWeather, ...formattedForcastWeather};
}
export default getFormattedWeatherData;