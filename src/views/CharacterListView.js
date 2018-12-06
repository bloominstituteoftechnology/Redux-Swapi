import React from "react";
import { connect } from "react-redux";
import { fetchSWAPI } from "../actions/index";


import { CharacterList } from "../components";
// import actions

class CharacterListView extends React.Component {

  componentDidMount() {
    this.props.fetchSWAPI();
  }


  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return "Loading..."
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

function mapStateToProps(state) {
  console.log(state);
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching
  };
}

export default connect(
    mapStateToProps,
    { fetchSWAPI }
  )(CharacterListView);
