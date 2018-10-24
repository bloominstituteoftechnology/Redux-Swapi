
import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { bobaFetch } from '../actions';
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.bobaFetch()
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      <h1>Fetching Data</h1>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />;
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
function foobarBanana(state) {
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching,
  }
}

export default connect(
  foobarBanana /* mapStateToProps replaces null here */,
  {
    /* action creators go here */
    bobaFetch,
  }
)(CharacterListView);
