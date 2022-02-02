import React from "react";

import "../wstyles/Weather.css";

function Current({ weatherInfo, date }) {
  return (
    <div className="WeatherMini mini_weather">
      <div className="Weather__info mini_weather_info">
        <img
          className="Weather__icon weather_mini_icon"
          src={
            "https://openweathermap.org/img/wn/" +
            weatherInfo.current.weather[0].icon +
            ".png"
          }
          alt={weatherInfo.current.weather[0].main}
        />
        <ul className="Weather__list mini_weather_list">
          <li className="list__temperature mini_list">
            {Math.round(weatherInfo.current.temp)}
            <sup className="list__temperature-symbol">°C</sup>
          </li>
        </ul>
      </div>
      <div className="Weather__other-info mini_other_info">
        <h3 className="other-info__clouds">
          {weatherInfo.current.weather[0].description}
        </h3>
      </div>
    </div>
  );
}
export default Current;
