import React, { useState } from 'react';
import './weather.css';

function Weather() {
  const [city, setCity] = useState('');
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [error, setError] = useState(null);

  function getWeather() {
    setError(null);
    const apiKey = '3a77f59b4751afd814f97c67b3b6a050';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`; // Fahrenheit

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('City not found or API request failed');
        }
        return response.json();
      })
      .then((data) => {
        let temperature = `Temperature: ${Math.round(data.main.temp)}°F`;
        let feelsLike = `Feels Like: ${Math.round(data.main.feels_like)}°F`;

        const weather = {
          location: `Weather in ${data.name}`,
          temperature,
          feelsLike,
          humidity: `Humidity: ${data.main.humidity}%`,
          wind: `Wind: ${data.wind.speed} mph`,
          condition: `Weather Condition: ${data.weather[0].description}`,
        };
        setWeatherInfo(weather);
      })
      .catch((error) => {
        setError('No data for that address');
        console.error(error);
      });
  }

  return (
    <section className='weather-container'>
      <input type='text' placeholder='Enter city name' value={city} onChange={(e) => setCity(e.target.value)} />
      <button onClick={getWeather}>Get Weather</button>
      {error && <p className='error-message'>{error}</p>}
      {weatherInfo && (
        <div className='weather-info'>
          <h3>{weatherInfo.location}</h3>
          <p>{weatherInfo.temperature}</p>
          <p>{weatherInfo.feelsLike}</p>
          <p>{weatherInfo.humidity}</p>
          <p>{weatherInfo.wind}</p>
          <p>{weatherInfo.condition}</p>
        </div>
      )}
    </section>
  );
}

export default Weather;