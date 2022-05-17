import { useState } from "react";
import Search from "./Search";
import Results from "./Results";
import axios from "axios";
const SearchContainer = () => {
  const [query, setQuery] = useState([]);
  const [results, setResults] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const apiKey = process.env.REACT_APP_STOCK_API_KEY;
      var options = {
        method: "GET",
        url: `https://yfapi.net/v11/finance/quoteSummary/${query}`,
        params: { modules: "defaultKeyStatistics,assetProfile" },
        headers: {
          "x-api-key": "i5On2nDfGB5pnfrMoXH1v5tuJXaMepfG5FnA1GxK",
        },
      };
      const response = await fetch(options);
      const data = await response.json();
      setResults(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
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
