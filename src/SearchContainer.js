import { useState } from "react";
import Search from "./Search";
import Results from "./Results";
import axios from "axios";

const SearchContainer = () => {
  const [query, setQuery] = useState([]);
  const [results, setResults] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    const apiKey = process.env.REACT_APP_STOCK_API_KEY;
    var options = {
      method: "GET",
      url: `https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=${query}`,
      params: { modules: "defaultKeyStatistics,assetProfile" },
      headers: {
        "x-api-key": "i5On2nDfGB5pnfrMoXH1v5tuJXaMepfG5FnA1GxK",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.quoteResponse.result[0].symbol);
        setResults(response.data);
        console.log(results);
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

      <Results results={results} />
    </div>
  );
};
export default SearchContainer;
