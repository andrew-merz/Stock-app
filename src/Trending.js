import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
function Trending() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const getTrending = {
      method: "GET",
      url: `https://yfapi.net/v1/finance/trending/US`,
      params: { modules: "defaultKeyStatistics,assetProfile" },
      headers: {
        "x-api-key": "mfvypoCS9o8suYiYPQVlw20XXI9Xn657Y48tiQfc",
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
    <div className="trending">
      {trending.slice(0, 10).map((trend, idx) => (
        <div className="trending-stock">
          <div key={idx}>
            <h2>{trend.symbol}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Trending;
