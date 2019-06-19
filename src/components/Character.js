import React from "react";

const Character = props => {
  return (
  <li>
  <div>{props.character.name}</div>
  </li>
  );
};

export default Character;
