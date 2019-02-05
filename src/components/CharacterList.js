import React from "react";
// import {connect} from 'react-redux';
// import {fetchCharacters} from '../actions';
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

// const mapStateToProps = state => {
//   return {
//     characters: state.characters,
//     // fetching: state.fetching,
//     // error: state.error
//   }
// }

// export default connect(mapStateToProps, {fetchCharacters})(CharacterList);

export default CharacterList;