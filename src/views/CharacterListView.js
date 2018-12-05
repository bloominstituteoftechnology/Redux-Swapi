import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { fetchChars } from '../actions';

class CharacterListView extends React.Component {

  componentDidMount() {
    // call our action
    this.props.fetchChars();
  }

  render() {
    return (
      <div className="CharactersList_wrapper">
        {this.props.fetching ? <h2>Loading characters..</h2> : null}
        <CharacterList characters={this.props.characters} />;
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = (state) => {
  console.log(state);
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching
  }
}

export default connect(mapStateToProps,{ fetchChars })(CharacterListView);
