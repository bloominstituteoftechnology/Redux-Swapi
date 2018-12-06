import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { fetchPeople } from '../actions';


class CharacterListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    // call our action
    this.props.fetchPeople();
  }

  render() {
    if (this.props.fetching) {
      return (
        <p>Loading Star Wars Characters...</p>
      );      
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state.charsReducer.characters);
  return {
    fetching: state.charsReducer.fetching,
    characters: state.charsReducer.characters
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPeople: () => {dispatch(fetchPeople())},
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterListView);
