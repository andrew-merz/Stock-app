import "./App.css";
import { useState } from "react";
import React from "react";
import SearchContainer from "./SearchContainer";

function App() {
  return (
    <div className="App">
      <h1>Stock App</h1>
      <SearchContainer />
    </div>
  );
}

export default App;
