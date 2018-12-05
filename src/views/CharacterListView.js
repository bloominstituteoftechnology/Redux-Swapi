import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { fetch_char } from '../actions';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.fetch_char();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      <h2>Loading...</h2> 
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />;
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('from mapStateToProps', state);
  return {
    characters: this.state.characters,
    fetching: this.state.fetching
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps, /* mapStateToProps replaces null here */,
  {
    /* action creators go here */
    fetch_char
  }
)(CharacterListView);
