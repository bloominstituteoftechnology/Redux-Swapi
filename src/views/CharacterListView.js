import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";

import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from '../actions';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.setState({ type: FETCH_START })
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      "...fetching data"
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} fetching={this.props.fetching}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.error,
  fetching: state.fetching,
  characters: state.characters,
})

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  { getChars }
)(CharacterListView);
