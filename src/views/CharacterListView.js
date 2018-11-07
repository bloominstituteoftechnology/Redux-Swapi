import React from "react";
import { connect } from "react-redux";
import {fetchChars} from '../actions/index'

import { CharacterList } from "../components";
// import actions

class CharacterListView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // call our action
    this.props.fetchChars()
  }

  render() {
    if (this.props.fetching) {
      <h1>Loading, please wait</h1>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />;
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    error: state.charsReducer.error,
    fetching: state.charsReducer.loading
  }
}
// the characters and the fetching boolean
export default connect(
  mapStateToProps, {fetchChars}
)(CharacterListView);
