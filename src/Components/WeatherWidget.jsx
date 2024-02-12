import React, { useEffect, useState } from 'react'
import Navbar from './navbar';

const WeatherWidget = () => {
  const [input, setInput] = useState('');
  const [weatherData, setweatherData] = useState();
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const API_KEY = `${import.meta.env.VITE_API_KEY}`

  const displaychange = (e) => {
    setInput(e.target.value);
  };

  const loadWeatherData = async () => {
    try {
      await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${input}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          // console.log(data);
          setweatherData(data);
        })
    } catch (error) {
      console.log(error)
    }
  };

  const onEnterPress = (e) => {
    if (e.keyCode == 13 && e.shiftKey == false) {
      e.preventDefault();
      loadWeatherData()
    }
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    })
    }, [long, lat]);

  return (
    <>
      <Navbar />
      <div className="flex-column-center">
      <h1>Weather Box</h1>
        <input
          type="text"
          value={input}
          onChange={displaychange}
          onKeyDown={onEnterPress}
          placeholder="enter your task"
          className="border-transparent shadow input-todo"
        ></input>
        <div className="weatherdatabox flex-column-center">
          
          {weatherData ? weatherData.error ? <>
            <div className='failed'>failed to load</div>
          </>
          :
           <>
            <img src={weatherData.current.condition.icon} alt="" />
            <h1>{weatherData.location.name}</h1>
            <h2>Temperature - {weatherData && weatherData.current.temp_c}^C</h2>
            <h2>Feelslike - {weatherData && weatherData.current.feelslike_c}^C</h2>
            <h2>Humidity - {weatherData && weatherData.current.humidity}%</h2>
            <h2>Pressure - {weatherData && weatherData.current.pressure_mb}mb</h2>
            <h2>Wind direction - {weatherData && weatherData.current.wind_dir}</h2>
            <h2>Speed - {weatherData && weatherData.current.wind_kph}kmph</h2>
          </> 
          : <h3>Enter location </h3>
        }
        </div>
      </div>
    </>
  )
}

export default WeatherWidget