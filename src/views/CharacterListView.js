import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import {getCharacters} from '../actions'

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.getCharacters()
   
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
        {this.props.error !== '' ? <p style={{margin: '1em auto', textAlign: 'center', fontSize: '2em'}}>{this.props.error}</p> :null}
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => {
  
  return {
    characters: state.charsReducer.characters,
    error: state.charsReducer.error
  };
};



export default connect(
  mapStateToProps,/* mapStateToProps replaces null here */
    { getCharacters }/* action creators go here */
  
)(CharacterListView);
