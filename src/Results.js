function Results(props) {
  const showData = props.results.map((stock, idx) => {
    return (
      <div>
        <li key={idx}>{stock.ticker}</li>
      </div>
    );
  });
  return <div>{showData}</div>;
}
export default Results;
