import { render, screen } from '@testing-library/react';
import WeatherApp from './WeatherApp';

test('Renders show forecast button', () => {
    render(<WeatherApp />);
    const showForecastButton = screen.getByText(/Show forecast/i);
    expect(showForecastButton).toBeInTheDocument();
});
