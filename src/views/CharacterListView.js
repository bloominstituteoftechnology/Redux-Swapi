import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { fetchChars } from "../actions/index.js" // import actions

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
      // return something here to indicate that you are fetching data
      <h2>One moment please!</h2>
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
const mapStateToProps = state = {
  return {
    characters: this.props.characters,
    loading: this.props.loading
  }
}

export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    /* action creators go here */
    fetchChars
  }
)(CharacterListView);
