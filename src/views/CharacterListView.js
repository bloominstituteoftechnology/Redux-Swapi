import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import {fetchCharacters} from '../actions/index'// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchCharacters()
    // call our action
  }

  render() {
    if (this.props.fetching) {
      return (
        <p>'Hold the phone... Loading data...'</p>
      )
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />;
      </div>
    );
  }
}


const mapStateToProps = (state) =>{
  return{
    characters : state.charsReducer.characters,
    fetching : state.charsReducer.fetching,
  }
}
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  {fetchCharacters
    /* action creators go here */
  }
)(CharacterListView);
