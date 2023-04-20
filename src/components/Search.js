import React from "react";

function Search({handleOnChangeSearch, isSearched}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={isSearched}
        onChange={(event) =>handleOnChangeSearch(event)}
      />
    </div>
  );
}

export default Search;
