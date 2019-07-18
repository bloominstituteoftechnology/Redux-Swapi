import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { getSWChars } from '../actions'

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.getSWChars()
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return (
        <div>
          <h2>Patience, my young apprentince. Data soon here will be.</h2>
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

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

function mapStateToProps(state) {
  console.log("CHARACTERS", state.charsReducer.characters);
  return {
    characters:state.charsReducer.characters,
    fetching: state.charsReducer.fetching,
    error: state.charsReducer.error
  }
}
export default connect(
  mapStateToProps,
  {
    getSWChars
  }
)(CharacterListView);
