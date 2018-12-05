import React from "react";
import {Li} from './../styles/styles'

const Character = props => {
  return <Li>{props.character.name}</Li>
};

export default Character;
