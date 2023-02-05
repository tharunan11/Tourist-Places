import React from "react";
import "./Card.css";

const Card = (props) => {
  const { name, city, id } = props;
  return (
    <div className=" dib di tc ma2 br3 pa3 ma3 grow ">
      <img
        alt="robots"
        src={require(`./images/img-${id}.jpg`)}
        width="400px"
        height={"400px"}
      />
      <div className="wid">
        <h2>{name}</h2>
        <h4>{city}</h4>
      </div>
    </div>
  );
};
export default Card;
