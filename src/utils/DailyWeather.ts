import { UnitWeather } from "types";

export const dailyWeather = (response: any): UnitWeather[] => {
  return response?.list
    .filter(
      (day: UnitWeather, index: number) =>
        index === 6 || index === 14 || index === 22
    )
    .map((day: UnitWeather, index: number) => {
      day.dt_txt =
        index === 0
          ? "Tomorrow"
          : `${new Date(new Date(day.dt_txt)).toLocaleString("en-us", {
              weekday: "long",
            })} ${day.dt_txt.split(" ")[0].split("-")[2]}/${
              day.dt_txt.split(" ")[0].split("-")[1]
            }`;
      return day;
    });
};
