import React from 'react';
import { connect } from 'react-redux';

import { CharacterList } from '../components';
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
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
const mapStateToProps = (state) => {
  console.log('maptstatesnhd', state)
  return {
    characters: state.charsReducer.characters,
    isFetching: state.charsReducer.isFetching,
    error: state.charsReducer.error,
  };
};

export default connect(
  mapStateToProps,
  { fetchCharacters }
)(CharacterListView);
