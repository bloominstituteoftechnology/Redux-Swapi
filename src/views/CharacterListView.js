import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import {getCharacters} from '../actions';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.getCharacters();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return (
        <p>Loading...</p>
      )
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state.charsReducer.characters);
  return {
    fetching: state.charsReducer.fetching,
    characters: state.charsReducer.characters
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getCharacters: () => {dispatch(getCharacters())},
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterListView);
