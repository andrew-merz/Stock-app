function Results(props) {
  const showStock = props.results.quoteResponse.result[0];
  console.log(showStock);
  return (
    <div>
      <h1>{showStock.symbol}</h1>
    </div>
  );
}

export default Results;
