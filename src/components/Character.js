import React from "react";

const Character = props => {
  console.log(props.character, "here")
  return <li>{props.character.name}</li>
};

export default Character;
