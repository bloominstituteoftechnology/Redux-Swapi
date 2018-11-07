import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { FETCHING, SUCCESS, FAILURE, fetchCharacters } from '../actions';
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.fetchCharacters()
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return 'These are not the droids you are looking for'
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />;
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mstp = state => {
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fatching
  }
}

export default connect(
  mstp,
  {
    FETCHING, SUCCESS, FAILURE, fetchCharacters
  }
)(CharacterListView);
