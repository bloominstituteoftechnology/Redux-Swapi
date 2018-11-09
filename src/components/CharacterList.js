import React from "react";
import { connect } from 'react-redux';
import Character from "./Character";
import { getCharacters } from '../actions';

const CharacterList = props => {
  return (
    <ul>
      {props.characters.map(character => {
        return <Character key={character.name} character={character} />;
      })}
    </ul>
  );
};

/* export default CharacterList; */
/* const mapStateToProps = state => {
  return {
    characters: state.characters,
    error: state.error,
    loading: state.loading
  }
} */

export default CharacterList;
