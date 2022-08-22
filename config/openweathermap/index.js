// @see: https://openweathermap.org/api

// Limitations
// Hourly forecast: unavailable
// Current weather API: available
// Calls per minute: 60
// 3 hour forecast: 5 days
// @see: https://openweathermap.org/price#weather

module.exports = {
  baseURL: "https://api.openweathermap.org/data/2.5/",

  // If this key has expired, generate a new one: https://home.openweathermap.org/api_keys
  apiKey: "8902f27888d608607c43be48ab84abab",
};
