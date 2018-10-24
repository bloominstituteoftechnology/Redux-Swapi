import React from 'react';
import { connect } from 'react-redux';

import { CharacterList } from '../components';
// import actions
import { fetchPeople } from '../actions';

class CharacterListView extends React.Component {
  componentDidMount() {
    // call our action
    this.props.fetchPeople();
    console.log(this.props.state);
  }

  render() {
    return (
      <div className="CharactersList_wrapper">
        {this.props.isFetching ? (
          <div>Loading...</div>
        ) : (
          <CharacterList characters={this.props.characters} />
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
    isFetching: state.charsReducer.isFetching
  };
};

export default connect(
  mapStateToProps,
  { fetchPeople }
)(CharacterListView);
