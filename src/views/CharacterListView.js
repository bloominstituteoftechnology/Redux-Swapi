import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { fetchChars } from "../actions/index"
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.fetchChars();
  }

  render() {
    if (this.props.fetching) {
      return <p>Works great!</p>
      // return something here to indicate that you are fetching data
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
    loading: state.charsReducer.loading
  };
};
// the characters and the fetching boolean
export default connect( mapStateToProps,{ fetchChars })(CharacterListView);


