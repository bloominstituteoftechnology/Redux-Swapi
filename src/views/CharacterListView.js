import React from "react";
import { connect } from "react-redux";
import Axios from 'axios';
import { CharacterList } from "../components";
import {fetchCharacters} from '../actions'

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchCharacters();
  }

  render() {
    console.log('rendering ', this.props)
    if (this.props.isFetching) {
      // return something here to indicate that you are fetching data
      <h1>Loading Data...</h1>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />;
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isFetching:state.charsReducer.isFetching,
    characters:state.charsReducer.characters,
  };
};

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  {
    fetchCharacters
  }
)(CharacterListView);
