import React from "react";

const Character = props => {
  return (
      <div>
          <li>{props.character.name}</li>
          <h2>Height: {props.character.height}</h2>
          <h2>Weight: {props.character.mass}</h2>
          <h2>Hair Color: {props.character.hair_color}</h2>
          <h2>Skin Color: {props.character.skin_color}</h2>
          <h2>Birth Year: {props.character.birth_year}</h2>
          <h2>Eye Color: {props.character.eye_color}</h2>
      </div>        
    );
};

export default Character;
