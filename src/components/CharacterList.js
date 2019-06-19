import React from "react";
import Character from "./Character";

const CharacterList = props => {
  return (
    <div>
      <ul>
        {props.characters.map(character => {
          return <Character key={character.name} character={character} />;
        })}
      </ul>
    </div>
  );
};

export default CharacterList;
