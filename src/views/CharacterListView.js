import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getChars } from '../actions';
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.getChars();
  };

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
     <h3>Fetching characters...</h3>
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

const mapStateToProps = state => {
    return {
  characters: state.charsReducer.characters,
  fetching: state.charsReducer.fetching,
  error: state.charsReducer.error
  };
};


export default connect(
  mapStateToProps,
  { getChars }
)(CharacterListView);
