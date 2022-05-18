import { useState } from "react";
import Search from "./Search";
import Results from "./Results";
import axios from "axios";

const SearchContainer = () => {
  const [query, setQuery] = useState([]);
  const [results, setResults] = useState([]);
  const [summary, setSummary] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    const apiKey = process.env.REACT_APP_STOCK_API_KEY;
    const quote = {
      method: "GET",
      url: `https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=${query}`,
      params: { modules: "defaultKeyStatistics,assetProfile" },
      headers: {
        "x-api-key": "i5On2nDfGB5pnfrMoXH1v5tuJXaMepfG5FnA1GxK",
      },
    };
    axios
      .request(quote)
      .then(function (response) {
        console.log(response.data);
        setResults(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });

    const quoteSummary = {
      method: "GET",
      url: `https://yfapi.net/v11/finance/quoteSummary/${query}`,
      params: { modules: "defaultKeyStatistics,assetProfile" },
      headers: {
        "x-api-key": "i5On2nDfGB5pnfrMoXH1v5tuJXaMepfG5FnA1GxK",
      },
    };
    axios
      .request(quoteSummary)
      .then(function (response) {
        console.log(
          response.data.quoteSummary.result[0].assetProfile.longBusinessSummary
        );
        setSummary(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  function handleChange(e) {
    setQuery(e.target.value);
  }
  return (
    <div>
      <Search
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        query={query}
      />

      <Results results={results} summary={summary} />
    </div>
  );
};
export default SearchContainer;
