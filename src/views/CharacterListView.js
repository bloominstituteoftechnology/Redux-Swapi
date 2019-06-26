import React from "react";
import { connect } from "react-redux";
import {getCharacter} from "../actions"

import { CharacterList } from "../components";
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
      this.props.getCharacter()
    // call our action
  }
  

  render() {
    console.log(this.props.isfetching)
    console.log(this.props.characters)
    if (this.props.fetching) {
      <h1> Loading......</h1>
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
const mapStateToProps = state =>{
  console.log(state)
  return{
  characters: state.charsReducer.characters,
  isfetching: state.charsReducer.isfetching}

  }
export default connect(
  mapStateToProps,  /* mapStateToProps replaces null here */
  {getCharacter}
)(CharacterListView);
