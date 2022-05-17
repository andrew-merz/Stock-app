function Results(props) {
  const showStock = props.results.quoteResponse?.result[0];
  //console.log(showStock);
  if (!showStock) return null;
  return (
    <div>
      <h1>{showStock.displayName}</h1>
      <h2>${showStock.regularMarketDayRange}</h2>
      <h2>{showStock.longName}</h2>
      <h1>{showStock.quoteType}</h1>
    </div>
  );
}

export default Results;
