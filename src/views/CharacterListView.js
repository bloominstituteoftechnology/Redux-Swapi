import React from 'react';
import { connect } from 'react-redux';

import { CharacterList } from '../components';
// import actions
import { fetchCharacters } from '../actions';

class CharacterListView extends React.Component {
  componentDidMount() {
    // call our action
    this.props.fetchCharacters();
  }

  render() {
    if (this.props.isFetching) {
      // return something here to indicate that you are fetching data
      return <h2>Loading Characters...</h2>;
    }
    return (
      <div className='CharactersList_wrapper'>
        <CharacterList characters={this.props.characters} />;
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
function mapStateToProps(state) {
  console.log(state);
  return {
    characters: state.charsReducer.characters,
    isFetching: state.charsReducer.fetching,
    error: state.charsReducer.error
  };
}

export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    /* action creators go here */
    fetchCharacters
  }
)(CharacterListView);
