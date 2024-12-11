import React, { useState, useEffect } from 'react';
import { citiesByState } from '../cities';

const weatherImages = {
  "clear sky": "/weather-icons/clear_sky.png",
  "few clouds": "/weather-icons/few_clouds.png",
  "scattered clouds": "/weather-icons/scattered_clouds.png",
  "broken clouds": "/weather-icons/broken_clouds.png",
  "shower rain": "/weather-icons/shower_rain.png",
  "rain": "/weather-icons/rain.png",
  "thunderstorm": "/weather-icons/thunderstorm.png",
  "snow": "/weather-icons/snow.png",
  "mist": "/weather-icons/mist.png",
  "over cast": "/weather-icons/overcastcloud.png",
  "light snow": "/weather-icons/lightsnow.png",
  "drizzle": "/weather-icons/drizzle.png",
};

const WeatherApp = ({ searchTerm }) => {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherForCity = async (city) => {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=61e723cab4a4986df23ec04cb51e6e32`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    };

    const fetchWeatherForState = async (state) => {
      const cities = citiesByState[state] || [];
      const weatherDataPromises = cities.map(city => fetchWeatherForCity(city));
      const weatherDataResults = await Promise.all(weatherDataPromises);
      return weatherDataResults;
    };

    const fetchWeather = async () => {
      setLoading(true);
      setError(null);
      try {
        let weatherResults;
        if (citiesByState[searchTerm]) {
          // searchTerm is a state
          weatherResults = await fetchWeatherForState(searchTerm);
        } else {
          // searchTerm is a city
          const weatherResult = await fetchWeatherForCity(searchTerm);
          weatherResults = [weatherResult];
        }
        setWeatherData(weatherResults);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (searchTerm) {
      fetchWeather();
    }
  }, [searchTerm]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Weather App</h1>
      {weatherData.length > 0 ? (
        weatherData.map((weather, index) => {
          const condition = weather.weather[0].description.toLowerCase();
          const imageUrl = weatherImages[condition] || '/weather-icons/default.png';
          const humidity = weather.main.humidity;

          return (
            <div key={index}>
              <h2>{weather.name}</h2>
              <p>Temperature: {(weather.main.temp - 273.15).toFixed(2)} °C</p>
              <p>Weather: {weather.weather[0].description}</p>
              <p>Humidity: {humidity}%</p>
              <img src={imageUrl} alt={condition} />
            </div>
          );
        })
      ) : (
        <p>No weather data available.</p>
      )}
    </div>
  );
};

export default WeatherApp;
