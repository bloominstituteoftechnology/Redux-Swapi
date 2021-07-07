import React from "react";

const Character = props => {
return (
  <div className='card'>
    <h1>{props.character.name}</h1>
    <li>Gender: {props.character.gender}</li>
    <li>Height: {props.character.height}</li>
    <li>Mass: {props.character.mass}</li>
    <li>Skin Color: {props.character.skin_color}</li>
    <li>Eye Color: {props.character.eye_color}</li>
    <li>Birth Year: {props.character.birth_year}</li>

  </div>
)
}
export default Character;
