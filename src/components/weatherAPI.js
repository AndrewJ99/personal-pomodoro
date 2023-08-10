import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios for making API requests

const BASE_URL = "http://api.weatherapi.com/v1";
const API_KEY = "26e3508e1f0c48d684964918230908";
const CITY = 'Rancho Cucamonga';
const API_URL = `${BASE_URL}/current.json?key=${API_KEY}&q=${CITY}&aqi=yes`;

const WeatherDisplay = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Fetch weather data from your backend API
    axios.get(API_URL)
      .then(response => {
        setWeatherData(response.data);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  }, []);

  return (
    <div>
      <h2>Weather Information</h2>
      {weatherData ? (
        <div>
            <p>Location: {weatherData.location.name}</p>
            <p>Temperature: {weatherData.current.feelslike_f} °F</p>
            <p>Condition: {weatherData.current.condition.text}</p>
            <img src={weatherData.current.condition.icon} alt="Condition Weather Icon"/>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default WeatherDisplay;
