import WeatherForecast from "components/WeatherForecast";
import WeatherDayTile from "components/WeatherDayTile";
import { useState } from "react";
import PenneoLogo from "resources/logo.png";
import "./WeatherApp.scss";

function WeatherApp() {
  const [showForecast, setShowForecast] = useState(false);

  const handleForecastEvent = () => {
    setShowForecast(!showForecast);
  };

  return (
    <div className="weather-app">
      <header className="weather-app-header">
        <img src={PenneoLogo} alt="Penneo Logo" width={120} />
      </header>

      <div className="weather-app-container">
        <div className="weather-app-actions">
          <button onClick={handleForecastEvent}>
            {!showForecast ? "Show forecast" : "Hide forecast"}
          </button>
        </div>

        <section className="weather-card-conteiner">
          {/* Display a day of weather */}
          <WeatherDayTile city={"South Park"} countryCode={"US"} />

          {/* @todo: Add a forecast for next 3 days */}
          <WeatherForecast
            showForecast={showForecast}
            city={"South Park"}
            countryCode={"US"}
          />
        </section>
      </div>
    </div>
  );
}

export default WeatherApp;
