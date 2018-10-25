import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { fetchChars } from "../actions";

class CharacterListView extends React.Component {
  componentDidMount() {
    // call our action
    this.props.fetchChars();
  }

  render() {
    if (this.props.isFetching) {
      // return something here to indicate that you are fetching data
      return <h3>Loading Characters...</h3>;
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
        {/* <h1>hi</h1> */}
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => {
  console.log('state', state.charsReducer.characters)
  return {
    characters: state.charsReducer.characters,
    isFetching: state.charsReducer.isFetching
  }
}
export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    /* action creators go here */
    fetchChars
  }
)(CharacterListView);