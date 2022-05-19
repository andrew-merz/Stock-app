import { useEffect, useState } from "react";
import axios from "axios";
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
    getTrending();
  }, [url]);
  if (!trending) return null;
  return (
    <div className="trending">
      {trending.map((trend, idx) => (
        <div key={idx}>
          <h2>{trend.symbol}</h2>
        </div>
      ))}
    </div>
  );
}
