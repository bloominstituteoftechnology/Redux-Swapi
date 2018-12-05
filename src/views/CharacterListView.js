import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { fetchCharacters } from '../actions';

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
      return <h3>Fetching Characters...</h3>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />;
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean\
function mapStateToProps(state) {
  console.log(state);
  return {
    characters: state.characters,
    isFetching: state.fetching
  }
}

export default connect(
  mapStateToProps,
  {
    fetchCharacters
  }
)(CharacterListView);
