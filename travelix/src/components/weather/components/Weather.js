import React from "react";

import "../wstyles/Weather.css";

 function Current({ weatherInfo, location, date }) {
  return (
    <div className="Weather mini_weather">
      <div className="Weather__info mini_weather_info">
        <img
          className="Weather__icon"
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
          <li> Humidity: {weatherInfo.current.humidity}% </li>
          <li>
            {" "}
            Wind: {Math.round(weatherInfo.current.wind_speed * 3.6)} km/h{" "}
          </li>
        </ul>
      </div>
      <div className="Weather__other-info mini_other_info">
        <h2 className="other-info__city">
          {location.city || location.town},{" "}
          {location.state || location.country}
        </h2>
        <h3 className="other-info__clouds">{date}</h3>
        <h3 className="other-info__clouds">
          {weatherInfo.current.weather[0].description}
        </h3>
      </div>
    </div>
  );
}
export default Current;