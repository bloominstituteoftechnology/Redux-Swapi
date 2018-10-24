import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { fetchingStarwars } from '../actions/index'

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchingStarwars();
  }

  render() {
    if (this.props.fetching) {
      <h1>Loading Starwars Characters...</h1>;
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    characters: state.charsReducer.starwarsChar,
    error: state.charsReducer.error,
    fetching: state.charsReducer.fetching,

  };

};

export default connect(
  mapStateToProps,
  {
    fetchingStarwars
  }
)(CharacterListView);
