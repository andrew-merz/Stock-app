import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const apiKey = process.env.REACT_APP_STOCK_API_KEY;
  const url = `https://api.stockdata.org/v1/data/quote?symbols=AAPL%2CTSLA%2CMSFT&api_token=YHkmnmMscvsSB7bwvZA4zxCEBYXVpoumVTRWoJtV`;
  const [stock, setStock] = useState(null);

  useEffect(() => {
    axios.get(url).then((response) => {
      setStock(response.data);
      console.log(stock.data[0].name);
    });
  }, [url]);

  if (stock) {
    return (
      <div>
        <h1>{stock.data[0].name}</h1>
      </div>
    );
  }
  return (
    <div className="App">
      <h1>Stock App</h1>
    </div>
  );
}

export default App;
