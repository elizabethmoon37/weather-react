import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
///import * as serviceWorker from ".serviceWorker";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <WeatherSearch />
      <br />
      <small>
        <a
          href="https://github.com/elizabethmoon37/weather-react"
          target="blank"
          rel="noreferrer"
        >
          Open-sourced code{" "}
        </a>{" "}
        by
        <a
          href="https://github.com/elizabethmoon37"
          target="blank"
          rel="noreferrer"
        >
          {" "}
          Beth Moon{" "}
        </a>
      </small>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
