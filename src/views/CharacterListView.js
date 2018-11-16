import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { fetchCharacters } from "../actions";
// import { }

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
   return  this.props.fetchCharacters();
    // call our action
  }

  render() {
    if (this.props.fetching) {
      return (
        <div>Patience is a virtue...</div>
      )
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching
  };
};
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    fetchCharacters
    /* action creators go here */
  }
)(CharacterListView);
