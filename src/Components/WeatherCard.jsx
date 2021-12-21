import "./styles/style.-weather-card.css";
import { MdOutlineLocationOn } from "react-icons/md";
import {
  FaThermometerThreeQuarters,
  FaTemperatureHigh,
  FaTemperatureLow,
} from "react-icons/fa";
import { ImDroplet } from "react-icons/im";
import { useWeather, useWeatherActions } from "./Context/WeatherProvider";
// import { useEffect } from "react";

const WeatherCard = () => {
  const weather = useWeather();
  // console.log(weather);
  const { changeToCelsius, getWeatherIcons } = useWeatherActions();

  // useEffect(() => {
  //   console.log(weather);
  // }, [weather]);

  return (
    <>
    {
      weather && 
      <div className="weather-card">
      <div className="part-1">
        <div className="location">
          <MdOutlineLocationOn />
          <h1>{weather.name}</h1>
        </div>
        <div className="temp-show">
          <div className="temp-image">
            {getWeatherIcons(weather.weather[0].icon)}
          </div>
          <div className="temp">
            <FaThermometerThreeQuarters />
            <h2>{changeToCelsius(weather.main.temp)}&deg;C</h2>
          </div>
          <h4>{weather.weather[0].description}</h4>
        </div>
      </div>
      <div className="part-2">
        <div className="humidity">
          <ImDroplet />
          <h2>Humidity : {weather.main.humidity} %</h2>
        </div>
        <div className="all-temp">
          <div className="max-temp">
            <FaTemperatureHigh />
            <p>max-temp : {changeToCelsius(weather.main.temp_max)}</p>
          </div>
          <div className="min-temp">
            <FaTemperatureLow />
            <p>min-temp : {changeToCelsius(weather.main.temp_min)}</p>
          </div>
        </div>
      </div>
    </div>
    }
    </>
  );
};

export default WeatherCard;
