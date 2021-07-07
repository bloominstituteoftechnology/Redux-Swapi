import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import {fetchPeople } from "../actions/index"

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchPeople()  
  }

  render() {
    if (this.props.fetching) {
      <div>generating characters...</div>
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
    characters: state.characters.name,
    fetching: state.characters.fetching
  }
}
export default connect(
  mapStateToProps, /* mapStateToProps replaces null here */
    { fetchPeople }/* action creators go here */
  
)(CharacterListView);
