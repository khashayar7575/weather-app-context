import { useState } from "react";
import "./styles/style.-weather-card.css";
import { FaSearchLocation } from "react-icons/fa";
import { useWeatherActions } from "./Context/WeatherProvider";

const CitySearch = () => {
  const { onSearchSubmit } = useWeatherActions();
  const [searchInputValue, setSearchInputValue] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSearchSubmit(searchInputValue);
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          name="city"
          placeholder="What city ?"
          className="uk-input input-search"
          onChange={(event) => setSearchInputValue(event.target.value)}
        />
        <button type="submit" className="btn-find-location">
          <FaSearchLocation />
        </button>
      </form>
    </div>
  );
};

export default CitySearch;
