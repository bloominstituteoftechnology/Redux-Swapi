import React from "react";

import Character from "./Character";

const CharacterList = props => {
  return (
    <ul>
      {this.props.characters.map(character => {
        return <Character key={character.name} />;
      })}
    </ul>
  );
};

export default CharacterList;
