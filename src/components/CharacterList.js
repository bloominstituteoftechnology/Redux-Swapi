import React from "react";

import Character from "./Character";

const CharacterList = props => {
  return (
    <ul>
      {this.props.charatacters.map(charatacter => {
        return <Character key={charatacter.name} />;
      })}
    </ul>
  );
};

export default CharacterList;
