import React from "react";

const Character = props => {
  return (
  <li>{props.character.name}</li>
  // <li>{props.character.height}</li>
  // <li>{props.character.gender}</li>
  // <li>{props.character.mass}</li>
  )
};

export default Character;
