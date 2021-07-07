import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { fetchCharacters } from "../actions/index";

class CharacterListView extends React.Component {
  componentDidMount() {
    this.props.fetchCharacters();
  }

  render() {
    if (this.props.fetching) {
      return (
        <div>Please wait while awesomeness is brought from another galaxy</div>
      );
    }
    
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { characters: state.charsReducer.characters, fetching: state.charsReducer.fetching };
};

export default connect(
  mapStateToProps,
  { fetchCharacters }
)(CharacterListView);