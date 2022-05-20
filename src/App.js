import "./App.css";

import React from "react";
import SearchContainer from "./SearchContainer";
import Home from "./Home";
import Market from "./Market";
function App() {
  return (
    <div className="App">
      <div className="title">
        <h1>Stock Screener</h1>
      </div>

      <SearchContainer />

      <div className="chart">
        <Market />
      </div>
      <div className="trending-title">
        <h2>Trending</h2>
      </div>
      <Home />
    </div>
  );
}

export default App;
