import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { fetchPeople } from '../actions';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.fetchPeople();
    console.log(this.props.fetchPeople())
  }

  render() {

      // return something here to indicate that you are fetching data
    return (
      <div className="CharactersList_wrapper">
        {this.props.isFetching ? <h2> Loading People ... </h2> : <h1> Star-Wars Characters</h1>}

        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
function mapStateToProps(state) {
  console.log(state);
  return {
    characters: state.charReducer.characters,
    isFetching: state.charReducer.fetching
  }
}
export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    /* action creators go here */
    fetchPeople
  }
)(CharacterListView);
