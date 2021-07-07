import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import {charReducer} from '../reducers/starWarsReducer.js';
import getSwapi from/* we need our action types here*/ "../actions";
//import reducers


// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.getSwapi();
  }

  render() {
    if (this.props.fetching) {
      return(
        <h1>Booting Up Your Hyperdrive...</h1>
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

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps= state =>{
  console.log(this.props);
  return{
    fetching:state.charsReducer.fetching,
    characters: state.charsReducer.characters,
    error: state.charsReducer.errorMessage

  }
}
export default connect(
  mapStateToProps,{getSwapi})(CharacterListView); /* mapStateToProps replaces null here */
  ;
