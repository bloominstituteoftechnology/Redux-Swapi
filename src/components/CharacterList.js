import React from "react";

import Character from "./Character";

const CharacterList = props => {
  return (
    <ul>
      <h1>STARWARS CHARACTERS</h1>
      {props.characters.map(character => {
        return <Character key={character.name} character={character} />;
      })}
    </ul>
  );
};

export default CharacterList;
