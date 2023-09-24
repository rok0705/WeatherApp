import React from "react";

const MainWeatherBox = ({ weather }) => {
  console.log("weather:", weather);

  return (
    <div className="weather-box">
      <h1>{weather?.name}</h1>
      <h2>
        {weather && weather.main.temp + "C / "}
        {weather &&
          parseFloat(weather.main.temp * (9 / 5) + 32).toFixed(2) + "F"}
      </h2>
      <h2>{weather && weather.weather[0].description}</h2>
      <h2>{weather && weather.sys.country}</h2>
    </div>
  );
};

export default MainWeatherBox;
