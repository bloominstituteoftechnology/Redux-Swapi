import React from "react";

const Character = props => {
  return <li className="list-view">{props.character.name}</li>;
};

export default Character;
