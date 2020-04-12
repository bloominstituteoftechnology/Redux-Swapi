import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import {fetchCharacters} from "../actions/index";

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.fetchCharacters();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      <h2>Loading...</h2>
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
function mapStateToProps(state){
  return{
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching,
    error: state.charsReducer.error
  }
}
export default connect(
  mapStateToProps, 
  {
    /* action creators go here */
    fetchCharacters
  }
)(CharacterListView);
