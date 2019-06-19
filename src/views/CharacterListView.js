import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import  { getChars } from '../actions';
import Loader from 'react-loader-spinner';


class CharacterListView extends React.Component {
  constructor() {
    super();
   console.log(this.props)
  }

  componentDidMount() {
    // call our action
    this.props.getChars()
  }

  render() {
      {this.props.isLoading && (
        <p>Loading...</p>
      )}
      // return something here to indicate that you are fetching data
      
      {this.props.error && <p>{this.props}</p>}
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mtsp = state => {
  console.log(state)
  return{
    characters: state.charsReducer.characters,
    error: state.charsReducer.error,
    isLoading: state.charsReducer.isLoading 
  }
}

export default connect(
  mtsp, { getChars })(CharacterListView);
