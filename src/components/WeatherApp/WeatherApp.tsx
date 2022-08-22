import WeatherDayTile from 'components/WeatherDayTile';
import PenneoLogo from 'resources/logo.png';
import './WeatherApp.scss';

function WeatherApp() {
    return (
        <div className="weather-app">
            <header className="weather-app-header">
                <img src={PenneoLogo} alt="Penneo Logo" width={120} />
            </header>

            <div className="weather-app-container">
                <div className="weather-app-actions">
                    <button
                        onClick={() =>
                            console.log('Here goes real functionality :)')
                        }>
                        Show forecast
                    </button>
                </div>

                {/* Display a day of weather */}
                <WeatherDayTile city={'South Park'} countryCode={'US'} />

                {/* @todo: Add a forecast for next 3 days */}
            </div>
        </div>
    );
}

export default WeatherApp;
