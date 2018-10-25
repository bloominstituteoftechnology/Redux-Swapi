import React from "react";

const Character = props => {
  return <p className="char-item">{props.character.name}</p>;
};

export default Character;
