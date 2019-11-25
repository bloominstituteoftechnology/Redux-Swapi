import React from "react";

const Character = props => {
  return (
  <li>
    <div>
      <h4>{props.character.name}</h4>
      <h4>{props.character.height}</h4>
      <h4>{props.character.gender}</h4>
      <h4>{props.character.mass}</h4>
    </div>
  </li>
  )
};

export default Character;
