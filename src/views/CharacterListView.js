import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { fetchCharacters } from "../actions"

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchCharacters();
  }

  render() {
    if (this.props.fetching) {
      return <h3>Hold tight, we're fetching your characters...</h3>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.charsReducer.characters)
  return {
    characters: state.charsReducer.characters,
    fetchBoolean: 'what the heck is a fetch boolean?'
  } 
}


export default connect(
  mapStateToProps,
  {fetchCharacters}
)(CharacterListView);




