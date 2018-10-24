import React from 'react';
import { connect } from 'react-redux';

import logo from '../StarWars.png';

import { CharacterList } from '../components';
import { fetchChar } from '../actions';
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchChar();
  }

  render() {
    if (this.props.fetching) {
      <img src={logo} className="logo" alt="logo" />;
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
    characters: state.charsReducer.chars,
    fetching: state.charsReducer.fetching
  };
};

export default connect(
  mapStateToProps,
  {
    fetchChar
  }
)(CharacterListView);
