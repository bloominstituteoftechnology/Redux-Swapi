import React from "react";
import { connect } from "react-redux";
import { CharacterList } from "../components";
// import actions
import { fetchCharacters } from "../actions"

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchCharacters();
  }

  render() {
    if (this.props.isFetching) {
      <h2>Fetching characters</h2>
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
const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    isFetching: state.charsReducer.isFetching,
    error: state.charsReducer.error
  };
};

export default connect(
  mapStateToProps,
  {fetchCharacters}
)(CharacterListView);
