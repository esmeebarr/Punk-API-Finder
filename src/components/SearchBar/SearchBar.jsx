import React from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
  const { onBlur } = props;

  return (
    <div>
      <input
        className="input"
        type="text"
        placeholder="Search your beer here.."
        onBlur={(event) => {
          const beerName = event.target.value;
          onBlur(beerName);
        }}
      />
    </div>
  );
};

export default SearchBar;
