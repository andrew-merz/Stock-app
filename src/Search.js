function Search(props) {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={props.query}
          onChange={props.handleChange}
        />
        <button>submit</button>
      </form>
    </div>
  );
}
export default Search;
