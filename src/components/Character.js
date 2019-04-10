import React from "react";

const Character = props => {
  return (
    <li>    
      {props.character.name}
      <br/> 
      {props.character.height}
      <br/> 
      {props.character.mass}
      <br/> 
      {props.character.gender}
      <br/> 
      {props.character.species}
      <br/> 
      {props.character.birth_year}
      <br/> 
      {props.character.films}
      <br/> 
      {props.character.starships}
      <br/> 
    </li>
  )
};

export default Character;
