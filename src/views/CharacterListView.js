import React from "react";
import { connect } from "react-redux";
import { CharacterList } from "../components";
import {fetchCharacters} from '../actions/index'

// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchCharacters();
    // call our action
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      <p>Fetching Characters...</p>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    characters: state.characters.characters,
    fetching: state.characters.fetching
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps, /* mapStateToProps replaces null here */
  {
    fetchCharacters
    /* action creators go here */
  }
)(CharacterListView);
