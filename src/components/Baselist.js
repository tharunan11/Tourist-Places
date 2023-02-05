import React from "react";
import Base from "./base";

const Baselist = ({ Places }) => {
  return (
    <div>
      {Places.map((user, i) => {
        return (
          <Base
            key={i}
            id={Places[i].id}
            name={Places[i].name}
            city={Places[i].city}
          />
        );
      })}
    </div>
  );
};

export default Baselist;
