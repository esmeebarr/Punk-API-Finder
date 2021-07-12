import React from "react";
import Main from "../Main/Main";
import "./CardContainer.css";

const CardContainer = (props) => {
  const { data } = props;
  const cardsAsJSX = data.map((beer) => {
    const { id, name, description, image_url } = beer;
    return <Main key={id} name={name} info={description} image={image_url} />;
  });
  return (
    <div className="CardContainer">
      {cardsAsJSX}
      {/* <Main /> */}
    </div>
  );
};

export default CardContainer;
