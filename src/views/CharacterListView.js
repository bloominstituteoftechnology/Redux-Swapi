import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { fetchCharacters } from "../actions";

class CharacterListView extends React.Component {
  componentDidMount() {
    this.props.fetchCharacters();
  }

  render() {
    if (this.props.fetching) {
      return <h3>Loading from a Galaxy Far Far Away...</h3>;
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.chars} />;
      </div>
    );
  }
}

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
