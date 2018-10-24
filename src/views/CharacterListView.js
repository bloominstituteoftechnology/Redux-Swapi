import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { fetchCharacters } from "../actions";

class CharacterListView extends React.Component {
  componentDidMount() {
    this.props.fetchCharacters();
  }

  render() {
    return (
      <div className="CharactersList_wrapper">
        {this.props.isFetching ? (
          <h1>Loading...</h1>
        ) : (
          <CharacterList characters={this.props.characters} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    isFetching: state.charsReducer.isFetching,
    error: state.charsReducer.error,
  };
};

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  { fetchCharacters }
)(CharacterListView);
