import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
function Market() {
  const [market, setMarket] = useState([]);
  useEffect(() => {
    const getMarket = {
      method: "GET",
      url: `https://yfapi.net/v6/finance/quote/marketSummary?lang=en&region=US`,
      params: { modules: "defaultKeyStatistics,assetProfile" },
      headers: {
        "x-api-key": "i5On2nDfGB5pnfrMoXH1v5tuJXaMepfG5FnA1GxK",
      },
    };
    axios
      .request(getMarket)
      .then(function (response) {
        console.log(response.data.marketSummaryResponse.result[0]);
        setMarket(response.data.marketSummaryResponse.result);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  if (!market) return null;
  return (
    <div className="chart">
      {market.slice(0, 3).map((stock, idx) => (
        <div className="chart-data">
          <h2 key={idx}>{stock.shortName}</h2>
        </div>
      ))}
    </div>
  );
}
export default Market;
