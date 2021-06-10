import React from "react";
import "./Main.module.scss";

const Main = (props) => {
  const { name, info } = props;

  // const name = props.key;
  return (
    <div className="styles.main">
      <section className="card.styles">
        <img src={image} alt="beer" />
        <h2>{name}</h2>
        <p>{info}</p>
      </section>
    </div>
  );
};
export default Main;
