import Loader from "components/Loader";
import WeatherForecast from "components/WeatherForecast";
import WeatherDayTile from "components/WeatherDayTile";
import { useState } from "react";
import PenneoLogo from "resources/logo.png";
import "./WeatherApp.scss";

type LatLon = {
  coords: {
    latitude: number;
    longitude: number;
  };
};

function WeatherApp() {
  const [showForecast, setShowForecast] = useState(false);
  const [gelocation, setGeolocation] = useState(null) as any;
  const [isLoading, setIsloading] = useState(false);

  const handleForecastEvent = () => {
    setShowForecast(!showForecast);
  };

  const onChange = ({ coords }: LatLon) => {
    setIsloading(false);
    setGeolocation({
      latitude: coords.latitude,
      longitude: coords.longitude,
      show: true,
    });
  };

  const handleCurrentLocation = () => {
    setIsloading(true);
    if (!gelocation?.show) {
      return navigator.geolocation.getCurrentPosition(onChange);
    }
    setIsloading(false);
    setGeolocation(null);
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
          <button onClick={handleCurrentLocation}>
            {!gelocation?.show ? "Use my location" : "Stop using my location"}
          </button>
        </div>

        <section className="weather-card-conteiner">
          {/* Display a day of weather */}
          {isLoading && <Loader />}
          <WeatherDayTile
            city={"South Park"}
            countryCode={"US"}
            geolocation={gelocation}
          />

          {/* @todo: Add a forecast for next 3 days */}
          <WeatherForecast
            showForecast={showForecast}
            city={"South Park"}
            countryCode={"US"}
            geolocation={gelocation}
          />
        </section>
      </div>
    </div>
  );
}

export default WeatherApp;
