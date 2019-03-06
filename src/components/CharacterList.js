import React from "react";
import { connect } from 'react-redux';

import Character from "./Character";

const CharacterList = props => {

  return (
    <div>
      <div>{props.error}</div>
      {props.loading ? (
        <h1>Loading....</h1>
      ) : null}
      <ul>
        {props.characters.map(character => {
          return <Character key={character.name} character={character} />;
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    characters: state.chars.characters,
    loading: state.chars.loading,
    error: state.chars.error
  }
}

export default connect(mapStateToProps)(CharacterList);

