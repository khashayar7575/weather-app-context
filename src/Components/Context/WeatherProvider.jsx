import react, { useContext, useState, useEffect } from "react";
import axios from "axios";

const weatherContext = react.createContext();
const weatherContextDispath = react.createContext();

const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState("");

  useEffect(() => {
    if (weather) {
      document.title =
        "Weather : " +
        weather.name +
        " " +
        Math.round(weather.main.temp - 273.15) +
        " Celsius";
      console.log(weather);
    }
  }, [weather]);

  return (
    <weatherContext.Provider value={weather}>
      <weatherContextDispath.Provider value={setWeather}>
        {children}
      </weatherContextDispath.Provider>
    </weatherContext.Provider>
  );
};

export default WeatherProvider;
export const useWeather = () => useContext(weatherContext);
export const useWeatherActions = () => {
  const weather = useContext(weatherContext);
  const setWeather = useContext(weatherContextDispath);

  const onSearchSubmit = async (searchInputValue) => {
    const respons = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchInputValue}&appid=ca261c971d5638db9d4d6cbccc1f093d`
    );
    setWeather(respons.data);

    // change title page
  };

  const changeToCelsius = (kelvin) => {
    const celsius = Math.round(kelvin - 273.15);
    return celsius;
  };

  const getWeatherIcons = (iconParameter) => {
    const icon = `https://openweathermap.org/img/wn/${iconParameter}@2x.png`;
    return <img src={icon} alt={weather.weather[0].description} />;
  };

  return { onSearchSubmit, changeToCelsius, getWeatherIcons };
};
