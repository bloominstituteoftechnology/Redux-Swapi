import React from "react";

const Character = props => {
  return (
    <div>
      <li>{props.character.name}</li>
      <li>{props.character.height}</li>
      <li>{props.character.gender}</li>
    </div>
  )
};

export default Character;
