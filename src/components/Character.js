import React from "react";

const Character = props => {
  return <li>{props.character.name} {props.character.gender} {props.character.height}in</li>;
};

export default Character;
