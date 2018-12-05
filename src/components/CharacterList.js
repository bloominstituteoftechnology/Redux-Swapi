import React from "react";
// import { connect } from 'react-redux';    //first import connect

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

// mapStateToProps - state or state.characters ?
// const mapStateToProps = state => {
//   return {
//     characters: state.characters,
//     loading: state.loading,
//     error: state.error,
//   }
// }

// export default connect(mapStateToProps)(CharacterList)

export default CharacterList;
