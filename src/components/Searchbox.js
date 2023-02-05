import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--blue bw1 bg-light-green"
        type="search"
        placeholder="Search Places"
        onChange={searchChange}
      />
    </div>
  );
};
export default SearchBox;
