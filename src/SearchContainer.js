import { useState } from "react";
import Search from "./Search";
import Results from "./Results";

const SearchContainer = () => {
  const [query, setQuery] = useState([]);
  const [results, setResults] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(query);
    console.log(results.ticker);
    try {
      console.log("works");

      const apiKey = process.env.REACT_APP_STOCK_API_KEY;
      const URL = `https://api.polygon.io/v3/reference/tickers?market=stocks&active=true&sort=ticker&order=asc&limit=10&apiKey=6YK4tjC3E7VPriTopxjWVuhwsA1lSJPN`;
      const response = await fetch(URL);
      const data = await response.json();
      setResults(data.results);
      console.log(data.results);
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
