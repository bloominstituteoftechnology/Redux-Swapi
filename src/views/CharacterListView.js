import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { fetchingPeople } from '../actions/';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchingPeople()
  }

  render() {
    console.log(this.props.characters)
    if (this.props.fetching) {
      <h2>Hold on We're Loading...</h2>
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
  console.log(state)
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching
  }
  
}
export default connect(
 mapStateToProps,
  {
   fetchingPeople
  }
)(CharacterListView);
