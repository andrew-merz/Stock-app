import "./App.css";

import React from "react";
import SearchContainer from "./SearchContainer";
//import Home from "./Home";
function App() {
  return (
    <div className="App">
      <div className="title">
        <h1>Stock Screener</h1>
      </div>

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
      <div className="trending-title">
        <h2>Trending</h2>
      </div>
      <div className="trending">
        <div className="trending-stock">
          <h4>stock name</h4>
          <h2> current price</h2>
          <h5>+1.35%</h5>
        </div>
        <div className="trending-stock">
          <h4>stock name</h4>
          <h2> current price</h2>
          <h5>+1.35%</h5>
        </div>
        <div className="trending-stock">
          <h4>stock name</h4>
          <h2> current price</h2>
          <h5>+1.35%</h5>
        </div>
        <div className="trending-stock">
          <h4>stock name</h4>
          <h2> current price</h2>
          <h5>+1.35%</h5>
        </div>
        <div className="trending-stock">
          <h4>stock name</h4>
          <h2> current price</h2>
          <h5>+1.35%</h5>
        </div>
      </div>
    </div>
  );
}

export default App;
