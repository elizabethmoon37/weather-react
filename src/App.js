import "./App.css";
import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <footer>
          <span> This project was coded by </span>
          <a
            href="https://github.com/elizabethmoon37"
            target="blank"
            rel="noreferrer"
          >
            Beth Moon
          </a>
          <span> and is </span>

          <a
            href="https://github.com/elizabethmoon37/weather-react"
            target="blank"
            rel="noreferrer"
          >
            open-sourced on GitHub.
          </a>
        </footer>
      </div>
    </div>
  );
}
