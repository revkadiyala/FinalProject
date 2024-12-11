// src/components/WeatherDisplay.js
import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import styles from './WeatherDisplay.module.css';


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
  "drizzle":"/weather-icons/drizzle.png",
};

const WeatherDisplay = () => {
  const { weatherData, isLoading, apiError } = useContext(WeatherContext);

  if (isLoading) return <div>Loading...</div>;
  if (apiError) return <div>{apiError}</div>;
  if (!weatherData) return null;

  const condition = weatherData.weather[0].description.toLowerCase();
  const imageUrl = weatherImages[condition] || '/weather-icons/default.png';
  const humidity = weatherData.main.humidity;

  return (
    <div className={styles.WeatherDisplay}>
      <h2>{weatherData.name}</h2>
      <p className={styles.Temperature}>Temperature: {(weatherData.main.temp - 273.15).toFixed(2)} °C</p>
      <p className={styles.Condition}>Condition: {condition}</p>
      <p className={styles.Humidity}>Humidity: {humidity}%</p> {/* Display humidity */}
      <img src={imageUrl} alt={condition} className={styles.WeatherIcon} />
      
    </div>
  );
};

export default WeatherDisplay;
