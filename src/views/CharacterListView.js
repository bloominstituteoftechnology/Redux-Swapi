import React from "react";
import { connect } from "react-redux";


import { CharacterList } from "../components";

import { fetchChar } from "../actions";
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.fetchChar();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return (<p> LOADING DATA...one moment...</p>)
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

//mapStateToProps - state or state.characters; actually state.charsReducer!!
const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    loading: state.charsReducer.loading,
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
