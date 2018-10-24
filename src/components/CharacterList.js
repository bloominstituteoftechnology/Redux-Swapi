import React from "react";

import Character from "./Character";

const CharacterList = props => {
  
  return (
    <ul>
      {props.characters.map((character, index) => {
        return <Character key={index} character={character} />;
      })}
    </ul>
  );
};

export default CharacterList;
