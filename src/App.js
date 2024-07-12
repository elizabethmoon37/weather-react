import "./App.css";
import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div classNAme="container">
        <Weather />
        <footer>
          This project was coded by
          <a
            href="https://github.com/elizabethmoon37"
            target="blank"
            rel="noreferrer"
          >
            Beth Moon
          </a>
          and is
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
