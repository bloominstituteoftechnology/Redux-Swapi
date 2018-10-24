import React from "react";

const Character = props => {
  return <div className='character-card'>
  <h3>{props.character.name}</h3>
  <p>Born in {props.character.birth_year}</p>
  <p>Identifies as {props.character.gender}</p>
  <p>{props.character.height} cm tall</p>
  </div>;
};

export default Character;
