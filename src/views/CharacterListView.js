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
    if (this.props.fetchingCharacters) {
      // return something here to indicate that you are fetching data
      return <h1>Hold on while we get your data...</h1>;
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
    error: state.charsReducer.error,
    fetchingCharacters: state.charsReducer.fetchingCharacters // is our data currently being fetched???
  };
};

export default connect(
  mapStateToProps,
  {
    fetchCharacters
  }
)(CharacterListView);
