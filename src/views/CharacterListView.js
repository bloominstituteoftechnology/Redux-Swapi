import React from 'react';
import { connect } from 'react-redux';

import { fetchCharacters } from '../actions';
import { CharacterList } from '../components';

class CharacterListView extends React.Component {
  componentDidMount() {
    this.props.fetchCharacters();
  }

  render() {
    if (this.props.fetching) {
      return <span>Loading</span>;
    }
    if (this.props.error) {
      return <span style={{ color: 'red' }}>Error</span>;
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  characters: state.chars.characters,
  fetching: state.chars.isFetching,
  error: state.chars.error,
});

export default connect(
  mapStateToProps,
  { fetchCharacters }
)(CharacterListView);
