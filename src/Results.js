import "./App.css";
function Results(props) {
  const showStock = props.results.quoteResponse?.result[0];
  const stockSummary =
    props.summary.quoteSummary?.result[0].assetProfile.longBusinessSummary;

  if (!showStock) return null;
  return (
    <div>
      <div>
        <h1>
          {showStock.displayName} ({showStock.symbol})
        </h1>
        <h1>Range: {showStock.regularMarketDayRange}</h1>
        <h1>Change {showStock.regularMarketChangePercent}%</h1>
      </div>
      <h2>Stats</h2>
      <div className="Stats">
        <table>
          <tr>
            <td>Market cap:</td>
            <td>{showStock.marketCap}</td>
          </tr>
          <tr>
            <td>Price-Earnings ratio:</td>
            <td>{showStock.forwardPE}</td>
          </tr>
          <tr>
            <td>High today:</td>
            <td>{showStock.regularMarketDayHigh}</td>
          </tr>
          <tr>
            <td>Low today:</td>
            <td>{showStock.regularMarketDayLow}</td>
          </tr>
          <tr>
            <td>52 Week high:</td>
            <td>{showStock.fiftyTwoWeekHigh}</td>
          </tr>
          <tr>
            <td>52 Week low:</td>
            <td>{showStock.fiftyTwoWeekLow}</td>
          </tr>
          <tr>
            <td>Open price:</td>
            <td>{showStock.regularMarketOpen}</td>
          </tr>
        </table>
      </div>
      <div className="About">
        <h2>About</h2>
      </div>
      <div className="summary">
        <p> {stockSummary}</p>
      </div>
    </div>
  );
}

export default Results;
