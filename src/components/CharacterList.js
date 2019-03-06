import React from "react";

import Character from "./Character";

const CharacterList = props => {
  // console.log('char list', props);
  if(!props.characters){return <h1>Loading</h1>}
  return (
    <ul>
      {props.characters.map(character => {
        return <Character key={character.name} character={character} />;
      })}
    </ul>
  );
};

export default CharacterList;
