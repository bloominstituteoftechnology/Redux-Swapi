import React from "react";
import "./styles.css";


const Character = props => {
  return <li>{props.character.name}</li>;
};

export default Character;
