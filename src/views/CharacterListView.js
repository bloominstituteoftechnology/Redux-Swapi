import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import {getCharacters} from  '../actions'
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getCharacters();

  }

  render() {
    if (this.props.fetching) {
      return <h2>Fetching Starwars Characters!</h2>
      
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />;
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    fetching: state.charsReducer.fetching,
    characters: state.charsReducer.characters,
    error: state.charsReducer.error
  }
}

export default connect(
  mapStateToProps, 
  {
    getCharacters
  }
)(CharacterListView);