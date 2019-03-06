import React from "react";
import { connect } from "react-redux";

//spinner
import Loader from 'react-loader-spinner'

import { CharacterList } from "../components";
// import actions
import {fetchCharacters} from '../actions/index'

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchCharacters()
  }

  render() {
    if (this.props.fetching) {
      <Loader type="Grid" color=" #4dea5e" height={80} width={80} />
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => {return{
  characters: state.charsReducer.characters,
  fetching: state.charsReducer.fetching,
}}
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  {
  fetchCharacters
  }
)(CharacterListView);
