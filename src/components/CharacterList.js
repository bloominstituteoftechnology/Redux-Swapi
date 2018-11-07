import React from "react";
import { connect } from 'react-redux';

import Character from "./Character";

const CharacterList = props => {

  return (
    <ul>
      {props.characters.map(character => {
        return <Character key={character.name} character={character} />;
      })}
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    characters: state.chars.characters
  }
}

export default connect(mapStateToProps)(CharacterList);

