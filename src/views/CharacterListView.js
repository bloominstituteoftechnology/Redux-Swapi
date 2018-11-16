import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions

import { getSwChars } from '../actions'

class CharacterListView extends React.Component {
  componentDidMount() {
    // call our action
   this.props.getSwChars()
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
     return <h1>Loading...</h1>
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
 console.log(state)
 const { characters, fetching } = state.charsReducer
 return {
   characters: characters,
   fetching: fetching 
 }
}
export default connect(mapStateToProps,  /* mapStateToProps replaces null here */
  {
    /* action creators go here */
    getSwChars
  }
)(CharacterListView);
