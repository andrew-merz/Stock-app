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
        "x-api-key": "mfvypoCS9o8suYiYPQVlw20XXI9Xn657Y48tiQfc",
      },
    };
    axios
      .request(getMarket)
      .then(function (response) {
        console.log(
          response.data.marketSummaryResponse.result[0].regularMarketPrice.fmt
        );
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
          <div key={idx}>
            <h2>{stock.shortName}</h2>
            <h1>${stock.regularMarketPrice.fmt}</h1>
            <h1>{stock.regularMarketChangePercent.fmt}</h1>
            <h3>{stock.regularMarketTime.fmt}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Market;
