import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { fetchCharacters } from '../actions';  //can do this or need each one indiv? 

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log('characterlistviewprops', this.props);
    // call our action
    this.props.fetchCharacters()
  };

  render() {
    if (this.props.fetching) {  //isFetching or fetching? 
      // return something here to indicate that you are fetching data
      return (
        <h3>
          These are not the characters you are looking for.
        </h3>
      )
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
  return {
    characters: state.charsReducer.characters,
    isFetching: state.charsReducer.isFetching
  };
};

export default connect(
  mapStateToProps, 
  { fetchCharacters }
)(CharacterListView);
