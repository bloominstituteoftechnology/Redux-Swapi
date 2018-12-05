import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { fetchSwapi } from '../actions'

class CharacterListView extends React.Component {
  componentDidMount() {
    this.props.fetchSwapi();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return <div>Loading ...</div>
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
export default connect(
  (state) => ({
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching
  }) /* mapStateToProps replaces null here */,
  {
    fetchSwapi/* action creators go here */
  }
)(CharacterListView);
