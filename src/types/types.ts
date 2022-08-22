export type Query = {
  q?: string;
  cnt?: number;
  lat?: number;
  lon?: number;
  units?: string;
};

export type UnitWeather = {
  weather: any;
  dt_txt: string;
  main: any;
};

export type Weather = {
  city: string;
  countryCode: string;
  showForecast?: boolean;
  geolocation?: Geolocation;
};

interface Geolocation {
  latitude: number;
  longitude: number;
  show: boolean;
}
