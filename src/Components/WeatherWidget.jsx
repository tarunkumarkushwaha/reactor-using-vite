import React, { useEffect, useState } from 'react'
import Navbar from './navbar';

const WeatherWidget = () => {
  const [input, setInput] = useState('');
  const [ERRor, setERRor] = useState(false);
  const [weatherData, setweatherData] = useState();
  const [location, setLocation] = useState("26.9736955,84.8463571");
  const API_KEY = `${import.meta.env.VITE_API_KEY}`

  const displaychange = (e) => {
    setInput(e.target.value);
  };

  const loadWeatherData = async () => {
    try {
      await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${input}`)
        .then(response => {
          if (response.ok) {
            setERRor(false);
            return response.json();
          } else {
            setERRor(true);
          }
        })
        .then((data) => {
          // setweatherData(data);
          console.log(data)
        }).catch(error => console.log(error));
    }
    catch (error) { console.log(error) }
  }

  const onEnterPress = (e) => {
    if (e.keyCode == 13 && e.shiftKey == false) {
      e.preventDefault();
      loadWeatherData()
    }
  }

  const fetchData = async () => {
    await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`)
    .then(res => res.json())
    .then(data => {
      setweatherData(data)
      // console.log(data);
    });
  }
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLocation(position.coords.latitude.toString() +","+ position.coords.longitude.toString(),fetchData());
    });
  }, [location]);

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
          placeholder="enter location"
          className="border-transparent shadow weathersearch"
        ></input>
        <div className="WeatherContainer border-transparent shadow flex-column-center">
          
          {weatherData ? weatherData.error ? <>
            <div className='failed'>failed to load</div>
          </>
          :
           <>
            <img src={weatherData.current.condition.icon} alt="" />
            <h4>{weatherData && weatherData.current.condition.text}</h4>
            <h1>{weatherData.location.name}, {weatherData.location.region}</h1>
            <h2>Temperature - {weatherData && weatherData.current.temp_c}^C</h2>
            <h4>Feelslike - {weatherData && weatherData.current.feelslike_c}^C</h4>
            <h4>Humidity - {weatherData && weatherData.current.humidity}%</h4>
            <h4>Pressure - {weatherData && weatherData.current.pressure_mb}mb</h4>
            <h4>Wind direction - {weatherData && weatherData.current.wind_dir}</h4>
            <h4>Speed - {weatherData && weatherData.current.wind_kph}kmph</h4>
            <h4>last updated - {weatherData && weatherData.current.last_updated}</h4>
          </> 
          : <h3>Enter location </h3>
        }
        </div>
      </div>
    </>
  )
}

export default WeatherWidget