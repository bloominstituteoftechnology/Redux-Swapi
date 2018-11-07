import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { fetch } from '../actions';

class CharacterListView extends React.Component {
  
  componentDidMount() {
    // call our action
    this.props.fetch()
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return <div className='loading'>Loading...</div>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />;
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
    isFetching: state.charsReducer.isFetching
  };
};

export default connect(
  mapStateToProps,
  {
    fetch
  }
)(CharacterListView);
