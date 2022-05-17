function Results(props) {
  const showData = props.results.map((stock, idx) => {
    return (
      <h1>
        {stock.name} key={idx}
      </h1>
    );
  });
  return <div>{showData}</div>;
}
export default Results;
