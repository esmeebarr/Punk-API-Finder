import React from "react";
// import "./Searchbar.module.scss";

const SearchBar = (props) => {
  const { onBlur } = props;

  return (
    <div>
      <input
        type="text"
        placeholder="Search here.."
        onBlur={(event) => {
          const beerName = event.target.value;
          onBlur(beerName);
        }}
      />
      ;
    </div>
  );
};

export default SearchBar;
