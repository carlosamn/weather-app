/* eslint-disable react-hooks/exhaustive-deps */
import { WeatherApiClient } from "api/WeatherApiClient";
import Loader from "components/Loader";
import WeatherCard from "components/WeatherCard";
import { Weather } from "types";
import React, { useEffect } from "react";
import { dailyWeather } from "utils/DailyWeather";
import { UnitWeather } from "types";
import { Query } from "types";

function WeatherForecast(props: Weather) {
  const { city, countryCode, showForecast, geolocation } = props;
  const [forecastData, setForecastData] = React.useState({
    data: [] as UnitWeather[],
    isLoading: false,
    geoData: [] as UnitWeather[],
  });

  const apiClient = new WeatherApiClient();

  useEffect(() => {
    if (
      showForecast &&
      (!forecastData.data.length || !forecastData.geoData.length)
    ) {
      setForecastData({
        ...forecastData,
        isLoading: true,
      });
      fetchForecast();
    }
  }, [showForecast, geolocation]);

  const fetchForecast = async () => {
    let query: Query = {
      q: `${city}, ${countryCode}`,
      cnt: 23,
    };
    if (geolocation?.show) {
      query = {
        lat: geolocation?.latitude,
        lon: geolocation?.longitude,
      };
    }

    const response = await apiClient.get("/forecast", query);
    const { data, geoData } = forecastData;
    const isNotDataFetched = !data.length && !geolocation;
    const isNotGeoDataFetched = !geoData.length && geolocation;

    setForecastData({
      data: isNotDataFetched ? dailyWeather(response) : forecastData.data,
      isLoading: false,
      geoData: isNotGeoDataFetched
        ? dailyWeather(response)
        : forecastData.geoData,
    });
  };

  return (
    <>
      {forecastData.isLoading && <Loader />}
      {showForecast && (
        <>
          {!geolocation
            ? forecastData.data.map((day: UnitWeather, keyValue: number) => (
                <WeatherCard key={keyValue} location={props} weather={day} />
              ))
            : forecastData.geoData.map((day: UnitWeather, keyValue: number) => (
                <WeatherCard key={keyValue} location={props} weather={day} />
              ))}
        </>
      )}
    </>
  );
}

export default WeatherForecast;
