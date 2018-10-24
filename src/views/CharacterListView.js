import React from "react";
import { connect } from "react-redux";
import { GET_CHARACTERS } from "../actions";

import {CharacterList} from "../components";
// import actions

class CharacterListView extends React.Component {


  componentDidMount() {
    // call our action
    this.props.GET_CHARACTERS();
  }

  render() {
    if (this.props.fetching) {
      return (
        <h1>Fetching Characters...</h1>
      );
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />;
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching 
  };
};
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(mapStateToProps,{ GET_CHARACTERS })(CharacterListView);
