import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { fetchChars } from '../actions';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
      this.props.fetchChars();
  }

  render() {
    if (this.props.error) {
      // return something here to indicate that you are fetching data
      return <h1>{this.props.error}</h1>
    }
    return (
      <div>
          {this.props.isFetching ? (
          <h3>Fetching Characters...</h3>
        ) : (
          <div className="CharactersList_wrapper">
          <CharacterList characters={this.props.characters} />
        </div>
        )}
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters, 
    error: state.charsReducer.error,
    fetching: state.charsReducer.isFetching 
  };
};

export default connect(
  mapStateToProps,
  {
    /* action creators go here */
    fetchChars
  }
)(CharacterListView);
