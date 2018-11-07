import React from "react";

import Character from "./Character";

let nextID = 0

const CharacterList = props => {
  return (
    <ul>
      {props.characters.map(character => {
        return <Character 
          id = {nextID++} 
          key = {character.name} 
          character = {character} 
          />;
      })}
    </ul>
  );
};

export default CharacterList;