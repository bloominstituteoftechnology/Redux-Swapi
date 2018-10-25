import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";

import  { fetchPeople } from '../actions';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchPeople();
  }

  render() {
    if (this.props.fetching) {
     return <h1>Fetching Characters, Please wait</h1>
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
    isFetching: state.charsReducer.isFetching,
    error: state.charsReducer.error
  }
}
export default connect(
  mapStateToProps,
  {
    fetchPeople
  }
)(CharacterListView);
