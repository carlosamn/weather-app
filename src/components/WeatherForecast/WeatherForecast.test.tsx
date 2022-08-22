import { render, screen } from "@testing-library/react";
import WeatherForecast from "./WeatherForecast";
import mockData from "./mockData";
import React from "react";

describe("Test Weather Forecast Component", () => {
  test("Assert 3 forecast cards once the Show Forecast button is active", () => {
    const mainUseState: any = React.useState;
    const stubInitialState = {
      data: mockData.fetchMockWeather().list,
    };

    jest
      .spyOn(React, "useState")
      .mockImplementationOnce(() => mainUseState(stubInitialState));

    render(
      <WeatherForecast
        city={"South Park"}
        countryCode={"US"}
        showForecast={true}
      />
    );
    const items = screen.getAllByRole(/listitem/).length;
    expect(items).toBe(3);
  });
});
