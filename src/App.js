import "./App.css";

import React from "react";
import SearchContainer from "./SearchContainer";
import Home from "./Home";
function App() {
  return (
    <div className="App">
      <h1>Stock App</h1>
      <SearchContainer />
      <div className="chart">
        <div className="chart-data">
          <h3>Chart</h3>
        </div>
        <div className="chart-data">
          <h3>Chart</h3>
        </div>
        <div className="chart-data">
          <h3>Chart</h3>
        </div>
      </div>

      <div className="trending">
        <div className="trending-stock">
          <h3>trending stock</h3>
        </div>
        <div className="trending-stock">
          <h3>trending stock</h3>
        </div>
        <div className="trending-stock">
          <h3>trending stock</h3>
        </div>
        <div className="trending-stock">
          <h3>trending stock</h3>
        </div>
        <div className="trending-stock">
          <h3>trending stock</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
