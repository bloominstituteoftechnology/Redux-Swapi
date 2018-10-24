import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import {fetchStarwar} from '../actions'

class CharacterListView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // call our action
    this.props.fetchStarwar();
  }

  render() {
    if (this.props.isFetching) {
      <h1>Fetching some starwar name from wherever</h1>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />;
      </div>
    );
  }
}
 const mapStateToProps = state =>{
   return {
     characters: state.charsReducer.characters,
     error: state.charsReducer.error,
     isFetching: state.charsReducer.isFetching
   }
 }
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
    mapStateToProps,
  {
    /* action creators go here */
    fetchStarwar
  }
)(CharacterListView);
