/* eslint-disable react-hooks/exhaustive-deps */
import { WeatherApiClient } from "api/WeatherApiClient";
import Loader from "components/Loader";
import WeatherCard from "components/WeatherCard";
import { Weather } from "types/types";

import React, { useEffect } from "react";
import { dailyWeather } from "utils/DailyWeather";

function WeatherForecast(props: Weather) {
  const { city, countryCode, showForecast } = props;
  const [forecastData, setForecastData] = React.useState({
    data: [] as any,
    isLoading: false,
    dataFetched: false,
  });

  const apiClient = new WeatherApiClient();

  useEffect(() => {
    if (showForecast && !forecastData.dataFetched) {
      setForecastData({ ...forecastData, isLoading: true });
      fetchForecast();
    }
  }, [showForecast]);

  const fetchForecast = async () => {
    const query = {
      q: `${city}, ${countryCode}`,
    };

    const response = await apiClient.get("/forecast", query);

    setForecastData({
      data: dailyWeather(response),
      isLoading: false,
      dataFetched: true,
    });
  };

  return (
    <>
      {forecastData.isLoading && <Loader />}
      {showForecast && (
        <>
          {forecastData.data.map((day: any, keyValue: number) => (
            <WeatherCard key={keyValue} location={props} weather={day} />
          ))}
        </>
      )}
    </>
  );
}

export default WeatherForecast;
