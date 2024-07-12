import "./App.css";
import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div classNAme="container">
        <h1>Weather App</h1>
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
        </footer>
      </div>
    </div>
  );
}
