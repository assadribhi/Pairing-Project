// React
import React from "react";

// Style
import { SearchBarStyle } from "../styles";

const SearchBar = (props) => {
  return (
    <SearchBarStyle
      placeholder="Search by Movie"
      onChange={(event) => props.setQuery(event.target.value)}
    />
  );
};

export default SearchBar;
