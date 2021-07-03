import React from "react";
import { connect } from "react-redux";

import  {fetchPeople}  from '../actions/index';
import { CharacterList } from "../components";
// import{} actions

class CharacterListView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    return this.props.fetchPeople();
  }

  render() {
    if (this.props.fetching) {
      return (
        <div><h1>Loading...</h1></div>
        )
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
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching
  }
}
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  {
    fetchPeople
  }
)(CharacterListView);
