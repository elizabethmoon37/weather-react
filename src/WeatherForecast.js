import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(false);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
            {forecast.map(function (dailyForecast, index) {
                if (index < 5) {
                    return(
                        <div className="col">
            <WeatherForecastDay data={forecast[0]} />
          </div>

                    )
                }
            }
          
        </div>
      </div>
    );
  } else {
    const apiKey = "6975040fc193feta4f47d8af4o55baa9";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
