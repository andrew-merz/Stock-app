function Search(props) {
  return (
    <div className="search-bar">
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
