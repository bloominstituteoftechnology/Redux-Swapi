import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import {actionCreator} from '../actions'

class CharacterListView extends React.Component {
  constructor() {
    super();
  };

  componentDidMount() {
    // call our action
    actionCreator()
  };

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
    };
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  };
};

const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    error: state.charsReducer.error,
    fetching: state.charsReducer.fetching
  };
};

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  /* mapStateToProps replaces null here */
  mapStateToProps, actionCreator

)(CharacterListView);
