import { FaSearch } from "react-icons/fa";
function Search(props) {
  return (
    <div className="wrap">
      <div className="search-bar">
        <form onSubmit={props.handleSubmit}>
          <input
            type="text"
            class="searchTerm"
            placeholder="Search"
            value={props.query}
            onChange={props.handleChange}
          />
        </form>
        <button className="searchButton">
          <FaSearch />
        </button>
      </div>
    </div>
  );
}
export default Search;
