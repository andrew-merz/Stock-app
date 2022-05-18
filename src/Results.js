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
        <p>{stockSummary}</p>
      </div>
      <div className="Stats">
        <h2>Stats</h2>
        <p>Market cap: {showStock.marketCap}</p>
        <p>Price-Earnings ratio: {showStock.forwardPE}</p>
        <p>High today: {showStock.regularMarketDayHigh}</p>
        <p>Low today: {showStock.regularMarketDayLow}</p>
        <p>52 Week high: {showStock.fiftyTwoWeekHigh}</p>
        <p>52 Week low: {showStock.fiftyTwoWeekLow}</p>
        <p>Open price: {showStock.regularMarketOpen}</p>
      </div>
    </div>
  );
}

export default Results;
