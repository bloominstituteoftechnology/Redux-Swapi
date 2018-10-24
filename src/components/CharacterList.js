import React from "react";

import Character from "./Character";

const CharacterList = props => {
  return (
    <ul>
      {props.characters.map(character => {
        return <Character key={character.name} char={character} />;
      })}
    </ul>
  );
};

export default CharacterList;
