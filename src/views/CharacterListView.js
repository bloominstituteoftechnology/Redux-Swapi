import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import {getPeople} from "../actions"
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getPeople()
    // call our action
  }

  render() {
    if (this.props.fetching) {
      return (
        <h1>Im Getting Dressed, give me a second!</h1>
      )
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
    fetching: state.charsReducer.fetching,
    error: state.charsReducer.error
  }
}

export default connect(
mapStateToProps, 
{getPeople})
(CharacterListView);
