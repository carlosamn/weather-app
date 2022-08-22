import React from "react";
import { WeatherApiClient } from "api/WeatherApiClient";
import "./WeatherDayTile.scss";
import Loader from "components/Loader";
import WeatherCard from "components/WeatherCard";
import { Weather } from "types/types";

type State = {
  data: any;
  isLoaded: boolean;
};

class WeatherDayTile extends React.Component<Weather, State> {
  private apiClient = new WeatherApiClient();

  constructor(props: Weather) {
    super(props);

    this.state = {
      data: null,
      isLoaded: false,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const { city, countryCode } = this.props;

    const query = {
      q: `${city},${countryCode}`,
      units: "metric",
    };

    const response = await this.apiClient.get("/weather", query);

    this.setState({
      data: response,
      isLoaded: true,
    });
  };

  render() {
    const { data, isLoaded } = this.state;

    if (!isLoaded) {
      return <Loader />;
    }

    return <WeatherCard location={this.props} weather={data} highlighted />;
  }
}

export default WeatherDayTile;
