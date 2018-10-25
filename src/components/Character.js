import React from "react";

const Character = props => {
  return (
    <div className="card card-body">
      <h2>{props.character.name}</h2>
      <div className="image-holder">
        <img
          className="character-img"
          src={props.character.image}
          alt={props.character.name}
        />
      </div>
      <h3>Height: {props.character.height}</h3>
      <h3>Hair Color: {props.character.hair_color}</h3>
      <h3>Skin Color: {props.character.skin_color}</h3>
      <h3>Eye Color: {props.character.eye_color}</h3>
      <h3>Birthday: {props.character.birth_year}</h3>
      <h3>Gender: {props.character.gender}</h3>
    </div>
  );
};

export default Character;
