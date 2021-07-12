import React from "react";
import "./Main.css";

const Main = (props) => {
  const { name, info, image } = props;

  // const name = props.key;
  return (
    <div className="main">
      <section className="card.styles">
        <img className="img" src={image} alt="beer" />
        <h2>{name}</h2>
        <p>{info}</p>
      </section>
    </div>
  );
};
export default Main;
