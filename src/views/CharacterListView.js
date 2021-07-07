import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import fetchChars from '../actions/index';
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchChars()
  }

  render() {
    if (this.props.fetching) {
      <h3>Loading your Characters! This won't take longer.</h3>
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
    fetching: state.charsReducer.fetching
  }
}
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(mapStateToProps,{fetchChars})(CharacterListView);
