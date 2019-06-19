import React from "react";

const Character = props => {
  return (
  <li>
  <div>
  <p>{props.character.name}</p>
  <p>{props.character.gender}</p>
  </div>
  </li>
  );
};

export default Character;
