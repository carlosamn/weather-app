const mockData = {
  fetchMockWeather: () => {
    return {
      cod: "200",
      message: 0,
      cnt: 40,
      list: [
        {
          dt: 1660780800,
          main: {
            temp: 303.88,
            feels_like: 301.91,
            temp_min: 303.07,
            temp_max: 303.88,
            pressure: 1014,
            sea_level: 1014,
            grnd_level: 826,
            humidity: 17,
            temp_kf: 0.81,
          },
          weather: [
            {
              id: 801,
              main: "Clouds",
              description: "few clouds",
              icon: "02d",
            },
          ],
          clouds: {
            all: 24,
          },
          wind: {
            speed: 2.72,
            deg: 327,
            gust: 2.7,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "d",
          },
          dt_txt: "2022-08-18 00:00:00",
        },
        {
          dt: 1660791600,
          main: {
            temp: 296.51,
            feels_like: 295.68,
            temp_min: 292.63,
            temp_max: 296.51,
            pressure: 1016,
            sea_level: 1016,
            grnd_level: 823,
            humidity: 30,
            temp_kf: 3.88,
          },
          weather: [
            {
              id: 801,
              main: "Clouds",
              description: "few clouds",
              icon: "02n",
            },
          ],
          clouds: {
            all: 14,
          },
          wind: {
            speed: 1.56,
            deg: 46,
            gust: 1.61,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "n",
          },
          dt_txt: "2022-08-18 03:00:00",
        },
        {
          dt: 1660802400,
          main: {
            temp: 289.19,
            feels_like: 288.16,
            temp_min: 289.19,
            temp_max: 289.19,
            pressure: 1020,
            sea_level: 1020,
            grnd_level: 824,
            humidity: 50,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: "Clear",
              description: "clear sky",
              icon: "01n",
            },
          ],
          clouds: {
            all: 7,
          },
          wind: {
            speed: 1.63,
            deg: 65,
            gust: 1.92,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "n",
          },
          dt_txt: "2022-08-18 06:00:00",
        },
      ],
      city: {
        id: 5839264,
        name: "South Park",
        coord: {
          lat: 43.4222,
          lon: -110.7933,
        },
        country: "US",
        population: 1731,
        timezone: -21600,
        sunrise: 1660739440,
        sunset: 1660789444,
      },
    };
  },
};

export default mockData;
