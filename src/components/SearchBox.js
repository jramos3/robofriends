import React from "react";

const SearchBox = props => {
  return (
    <div className="pa2">
      <input
        type="search"
        placeholder="search robots"
        className="pa3 ba b--green bg-lightest-blue"
        onChange={props.searchChange}
      />
    </div>
  );
};

export default SearchBox;
