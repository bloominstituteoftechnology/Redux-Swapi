import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getCharacters } from '../actions';
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.getCharacters()
  }

  render() {
    if (this.props.fetching) {
      console.log('fetching characters')
      // return something here to indicate that you are fetching data
        <h1>fetching characters</h1>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.charsReducer.fetching,
    characters: state.charsReducer.characters,
    error: state.charsReducer.error
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,  /* mapStateToProps replaces null here */
  { getCharacters
    /* action creators go here */
  }
)(CharacterListView);
