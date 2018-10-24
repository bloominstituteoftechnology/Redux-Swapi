import React from "react";

import Character from "./Character";

const CharacterList = props => {
  return (
    <ul>
      {this.props.charatacters.map(character => {
        return <Character key={character.name} character={character}/>;
      })}
    </ul>
  );
};

export default CharacterList;
