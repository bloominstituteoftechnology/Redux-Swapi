import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";

import { getChars } from '../actions';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.getChars()
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return (
      <p>"...fetching data"</p>
      )
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.charsReducer.error,
  fetching: state.charsReducer.fetching,
  characters: state.charsReducer.characters.results,
})

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  { getChars }
)(CharacterListView);
