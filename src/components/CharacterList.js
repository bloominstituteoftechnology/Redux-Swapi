import React from "react";
import { fetchChars } from "../actions";
import { connect } from 'react-redux';
import Character from "./Character";
import { rootReducer } from '../reducers'

class CharacterList extends React.Component {
  componentDidMount() {
    this.props.fetchChars();
  }
  render() {
    return (
      <ul>
        {this.props.characters.map(character => {
          return <Character key={character.name} character={character} />;
        })}
      </ul>
    );
  }
}


const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchChars }
)(CharacterList);


// export default CharacterList;
