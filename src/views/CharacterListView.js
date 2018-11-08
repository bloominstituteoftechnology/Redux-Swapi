import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";

import { FETCHING, SUCCESS, FAILURE, fetchChar } from "../actions";
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    return { fetchChar }
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />;
      </div>
    );
  }
}

//mapStateToProps - state or state.characters ?
const mapStateToProps = state => {
  return {
    characters: state.characters,
    loading: state.loading,
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    /* action creators go here */  fetchChar 
  }
)(CharacterListView);
