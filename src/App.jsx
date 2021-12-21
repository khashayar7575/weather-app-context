import "./App.css";
import CitySearch from "./Components/CitySearch";
import WeatherCard from "./Components/WeatherCard";
import WeatherProvider from "./Components/Context/WeatherProvider";

const App = () => {
  return (
    <WeatherProvider>
      <div className="body">
        <h1 className="title">WEATHER</h1>
        <div className="glass-card">
          <CitySearch />
          <WeatherCard />
        </div>
      </div>
    </WeatherProvider>
  );
};

export default App;
