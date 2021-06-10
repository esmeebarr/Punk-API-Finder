import React, { useState } from "react";
import "./Main.module.scss";

const Main = (props) => {
  const { beers } = props;
  return (
    <div className="styles.main">
      <section className="card.styles">
        <h2>Beer Name</h2>
        <h3>Beer Tagline</h3>
        <p>Beer Description</p>
      </section>
    </div>
  );
};
export default Main;
