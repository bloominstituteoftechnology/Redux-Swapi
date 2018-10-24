import React from "react";
import { connect } from "react-redux";
import { CharacterList } from "../components";
import { fetchCharacters } from "../actions";
import ReactLoading from "react-loading";

// import actions

class CharacterListView extends React.Component {
  componentDidMount() {
    // call our action
    this.props.fetchCharacters();
  }

  render() {
    if (this.props.isFetching) {
      return (
        <div className="loading-animation-contianer">
          <ReactLoading type={"spin"} color={"#dddddd"} className="loading-animation" />
        </div>
      );
      // return something here to indicate that you are fetching data
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

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  { fetchCharacters }
)(CharacterListView);
