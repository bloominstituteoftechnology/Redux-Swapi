import React from "react";
import { connect } from "react-redux";
import { CharacterList } from "../components";
import {fetchingCharacters}from '../actions'
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchingCharacters
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
    } return (
      <div className="CharactersList_wrapper">
      this is the character list
        <CharacterList characters={this.props.starWars} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    starWars: state.charsReducer.starWars,
    isFetching: state.charsReducer.isFetching,
  }
}
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
    mapStateToProps,
  {
    fetchingCharacters

    /* action creators go here */
  }
)(CharacterListView);
