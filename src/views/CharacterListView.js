import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";

// import actions
import { fetchCharacters } from '../actions/index.js'

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.fetchCharacters();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return (
        <p>Fetching characters...</p>
      )
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
    characters: state.characters.characters,
    fetching: state.characters.fetching
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps, 
  {
    /* action creators go here */
    fetchCharacters
  }
)(CharacterListView);
