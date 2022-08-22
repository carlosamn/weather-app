export const dailyWeather = (response: any): any[] => {
  return response?.list
    .filter(
      (day: any, index: number) => index === 6 || index === 14 || index === 22
    )
    .map((day: any, index: number) => {
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
