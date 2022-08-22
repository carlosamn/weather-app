import React from 'react';
import WeatherIcon from 'components/WeatherIcon';
import { WeatherApiClient } from 'api/WeatherApiClient';
import './WeatherDayTile.scss';

type Props = {
    city: string;
    countryCode: string;
};

type State = {
    data: any;
    isLoaded: boolean;
};

class WeatherDayTile extends React.Component<Props, State> {
    private apiClient = new WeatherApiClient();

    constructor(props: Props) {
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
            units: 'metric',
        };

        const response = await this.apiClient.get('/weather', query);

        this.setState({
            data: response,
            isLoaded: true,
        });
    };

    render() {
        const { data, isLoaded } = this.state;

        if (!isLoaded) {
            return <h3>Loading...</h3>;
        }

        const [primaryWeather] = data.weather;

        return (
            <div className="weather-day-tile">
                <h3>Weather in</h3>
                <p>
                    {this.props.city}, {this.props.countryCode}
                </p>

                <WeatherIcon icon={primaryWeather.icon} />
                <p>{primaryWeather.main}</p>

                <p>
                    <b>Temp:</b>&nbsp;
                    {data.main.temp}°
                </p>
            </div>
        );
    }
}

export default WeatherDayTile;
