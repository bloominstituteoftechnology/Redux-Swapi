import React from "react";
import { connect } from "react-redux";
// import actions
import { getCharacters } from '../actions/index.js'; // this is an action creator

import { CharacterList } from "../components";
// import { FETCHING, ERROR, FETCHED } from "../actions"; // action types 
class CharacterListView extends React.Component {
  constructor(props) {
    super(props);
    // Assign state itself, and a default value for items
    this.state = {
      characters: []
}
  }

  componentDidMount() {
    // call our action
    this.props.getCharacters()
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return "Fetching data"
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state: the characters and the fetching boolean
const mapStateToProps = state => {
  // console.log(state)
  return{
    fetching: state.fetching,
    error: state.error,
    characters: state.characters
  }
}

export default connect(
  mapStateToProps,
  {
    /* action creators go here */
    getCharacters
  }
)(CharacterListView);
