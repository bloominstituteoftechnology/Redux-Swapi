import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { fetchCharacters } from "../actions"
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchCharacters()
    // call our action
  }

  render() {
    if (this.props.fetching) {
      <h3>Fetching Characters</h3>
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />;
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.charsReducer.isFetching,
    characters: state.charsReducer.characters
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  {
    fetchCharacters
  }
)(CharacterListView);
