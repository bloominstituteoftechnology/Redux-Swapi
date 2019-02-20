import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import {charData} from '../actions'
// import actions

class CharacterListView extends React.Component {
  

  componentDidMount() {
    this.props.dispatch(charData())
  }

  render() {
    if (this.props.fetching) {
      return <div>Using the force...</div>
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}
const mapStateToProps = state =>{
  return{
    characters: state.charsReducer.characters,
    fetch: state.charsReducer.fetch,
    fail: state.charsReducer.error
  }
}
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
   mapStateToProps)(CharacterListView);
 

