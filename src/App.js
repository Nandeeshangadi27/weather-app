import React, { useState } from "react";
import axios from "axios";

import "./App.css";
// import axios from "axios";
// const url = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={7ac2683f7a67e55fcbd96ca9824bf039}`;

function App() {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=7ac2683f7a67e55fcbd96ca9824bf039`;
  const [data, setdata] = useState({});
  const [location, setlocation] = useState({});

  const searchlocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((Response) => {
        setdata(Response.data);
      });
      setlocation("");
    }
  };

  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input
            type="text"
            placeholder="search.."
            className="search-bar"
            onChange={(event) => setlocation(event.target.value)}
            value={location}
            onKeyDown={searchlocation}
          ></input>
        </div>
        <div className="locatin-box">
          <div className="location">{data.name}</div>
          {/* <div className="date"> {datebuilder(new Date())}</div> */}
        </div>
        <div className="weather-box">
          <div className="temp">
            {data.main ? <h1>{data.main.temp}</h1> : null}
          </div>
          <div className="weather">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
