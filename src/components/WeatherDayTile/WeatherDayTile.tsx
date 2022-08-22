import React from "react";
import { WeatherApiClient } from "api/WeatherApiClient";
import "./WeatherDayTile.scss";
import Loader from "components/Loader";
import WeatherCard from "components/WeatherCard";
import { Weather } from "types";
import { Query } from "types";

type State = {
  data: any;
  persistentData: any;
  isLoaded: boolean;
  isGeolocationLoaded?: boolean;
};

class WeatherDayTile extends React.Component<Weather, State> {
  private apiClient = new WeatherApiClient();

  constructor(props: Weather) {
    super(props);

    this.state = {
      data: null,
      persistentData: null,
      isLoaded: false,
      isGeolocationLoaded: false,
    };
  }

  componentDidMount() {
    this.fetchData(this.props, this.state);
  }

  componentWillUpdate(nextProps: Weather, nextState: State) {
    if (nextProps.geolocation?.latitude === this.props.geolocation?.latitude)
      return;
    if (nextProps.geolocation?.show) {
      if (this.state.isGeolocationLoaded) {
        const { persistentData, data } = this.state;
        this.setState({
          ...this.state,
          persistentData: data,
          data: persistentData,
        });
        return;
      }
      this.fetchData({ ...nextProps }, { ...nextState });
      return;
    }

    const { persistentData } = this.state;

    this.setState({
      ...this.state,
      persistentData: nextState.data,
      data: persistentData,
    });
  }

  fetchData = async (props: Weather, state: State) => {
    const { city, countryCode, geolocation } = props;
    let query: Query = {
      q: `${city},${countryCode}`,
      units: "metric",
    };
    if (props.geolocation?.show) {
      query = {
        lat: geolocation?.latitude,
        lon: geolocation?.longitude,
      };
    }
    const response = await this.apiClient.get("/weather", query);
    const { data } = this.state;
    this.setState({
      isLoaded: true,
      persistentData: data,
      data: response,
      isGeolocationLoaded: geolocation?.latitude ? true : false,
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
