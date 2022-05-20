import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
function Home() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const getTrending = {
      method: "GET",
      url: `https://yfapi.net/v1/finance/trending/US`,
      params: { modules: "defaultKeyStatistics,assetProfile" },
      headers: {
        "x-api-key": "i5On2nDfGB5pnfrMoXH1v5tuJXaMepfG5FnA1GxK",
      },
    };
    axios
      .request(getTrending)
      .then(function (response) {
        console.log(response.data.finance.result[0].quotes);
        setTrending(response.data.finance.result[0].quotes);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  if (!trending) return null;
  return (
    <div className="trending-stock">
      {trending.map((trend, idx) => (
        <div key={idx}>
          <h2>{trend.symbol}</h2>
        </div>
      ))}
    </div>
  );
}
export default Home;
