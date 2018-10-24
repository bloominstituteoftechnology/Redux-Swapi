import React from "react";
import { connect } from "react-redux";
import { CharacterList } from "../components";
import { fetchCharacters } from "../actions";
import ReactLoading from "react-loading";

class CharacterListView extends React.Component {
  componentDidMount() {
    this.props.fetchCharacters();
  }

  render() {
    if (this.props.isFetching) {
      return (
        <div className="loading-animation-contianer">
          <ReactLoading type={"spin"} color={"#dddddd"} className="loading-animation" />
        </div>
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
  return {
    characters: state.charsReducer.characters,
    isFetching: state.charsReducer.isFetching
  };
};

export default connect(
  mapStateToProps,
  { fetchCharacters }
)(CharacterListView);
