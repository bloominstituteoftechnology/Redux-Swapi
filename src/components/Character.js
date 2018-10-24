import React from "react";
import '../styles/App.css';

const Character = props => {
  return <li className="character-list">{props.character.name}</li>;
};

export default Character;
