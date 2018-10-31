import React from "react";

import Character from "./Character";

let nextId = 0;

const CharacterList = props => {
  return (
      <ul>
        {props.characters.map(character => {
          return <Character key={character.name} id={nextId++} character={character} />
        })}
      </ul>
  );
};

export default CharacterList;
