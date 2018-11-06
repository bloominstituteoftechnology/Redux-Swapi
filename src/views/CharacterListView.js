import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import {FETCHING, SUCCESS, FAILURE, fetchCharacters} from "../actions"

class CharacterListView extends React.Component {
  componentDidMount() {
    return this.props.fetchCharacters();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return(<div>Loading Characters...</div>)
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />;
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state

const mapState = state => {
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching,
  }
}
// the characters and the fetching boolean
export default connect(mapState,
 /* mapStateToProps replaces null here */
  {
    /* action creators go here */
    FETCHING, SUCCESS, FAILURE, fetchCharacters
  }
)(CharacterListView);
