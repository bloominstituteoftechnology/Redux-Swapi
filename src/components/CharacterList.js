import React from "react";

import Character from "./Character";

const CharacterList = props => {
  console.log("In charlist: ", props );
  return (
    <ul>
      {props.characters.map(character => {
        return <Character key={character.name} character={character} />;
      })}
    </ul>
  );
};

export default CharacterList;
