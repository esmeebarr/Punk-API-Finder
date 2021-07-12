import React from "react";
import "./NavBar.css";

const NavBar = (props) => {
  const { onBlur } = props;

  return (
    <div>
      <nav>
        <input
          className="input"
          type="text"
          placeholder="Search your beer here.."
          onBlur={(event) => {
            const beerName = event.target.value;
            onBlur(beerName);
          }}
        />
      </nav>
    </div>
  );
};

export default NavBar;
