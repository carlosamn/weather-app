import WeatherIcon from "components/WeatherIcon";
import { Weather } from "types/types";
import "./WeatherCard.scss";

interface CardProps {
  location: Weather;
  weather: any;
  highlighted?: boolean;
}

const WeatherCard = ({ location, weather, highlighted }: CardProps) => {
  return (
    <div
      className={`weather-day-tile${highlighted ? " highlight-card" : ""}`}
      role="listitem"
    >
      <h3>{weather?.dt_txt || "Weather in"}</h3>
      <p>
        {location.city}, {location.countryCode}
      </p>

      <WeatherIcon icon={weather?.weather[0]?.icon} />
      <p>{weather?.weather[0].main}</p>

      <div className="temperature-container">
        <span>
          <b>Temp max:</b>&nbsp;
          {weather?.main.temp}°
        </span>
        <span>
          <b>Temp min:</b>&nbsp;
          {weather?.main.temp_min}°
        </span>
      </div>
    </div>
  );
};

export default WeatherCard;
