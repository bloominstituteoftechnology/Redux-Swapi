import React from "react";
import { connect } from "react-redux";
import {fetchPeople} from "../actions";
import { CharacterList } from "../components";
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchPeople();
  }

  render() {
    console.log(this.props)
    if (this.props.fetching) {
      <div>Fetching...</div>
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
const mapStateToProps = (state) => {
  return {
    characters: state.charsReducer.characters,
    error: state.charsReducer.error, 
    fetching: state.charsReducer.fetching}
  }

export default connect(mapStateToProps,{fetchPeople})(CharacterListView);
