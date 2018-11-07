import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getinfo } from "../actions";
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.getinfo()
  }

  render() {
    if (this.props.loading) {
      return (
        <p>Loading Characters</p>
        // return something here to indicate that you are fetching data
      )
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
const mapStateToProps = state => {
  return {
    loading: state.charsReducer.loading,
    characters: state.charsReducer.characters
  };

};

export default connect(
  mapStateToProps,
  {
    getinfo
    /* action creators go here */
  }
)(CharacterListView);
