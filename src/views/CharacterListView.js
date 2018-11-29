import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { fetchCharacters } from "../actions";

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchCharacters();
    // call our action
  }

  render() {
    if (this.props.fetching) {
      return <h3>Loading characters...</h3>;
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.chars} />;
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => {
  return {
    chars: state.starWars.chars,
    fetching: state.starWars.fetching
  };
};

export default connect(
  mapStateToProps,
  { fetchCharacters }
)(CharacterListView);
