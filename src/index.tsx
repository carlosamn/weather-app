import React from 'react';
import ReactDOM from 'react-dom';
import WeatherApp from 'components/WeatherApp';
import './index.scss';

ReactDOM.render(
    <React.StrictMode>
        <WeatherApp />
    </React.StrictMode>,
    document.getElementById('root')
);
