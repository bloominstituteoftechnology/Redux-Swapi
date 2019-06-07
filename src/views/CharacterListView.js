import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import {fetchCharacters} from '../actions';
// import actions

class CharacterListView extends React.Component {

  componentDidMount() {
    console.log(this.props.fetchCharacters());
    
  }

  render() {
    if (this.props.loading) {
      return (
        <div className="loading">
          <p>Loading</p>
        </div>
      )
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

const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    loading: state.charsReducer.loading
  }
}

export default connect(mapStateToProps, {fetchCharacters})(CharacterListView)