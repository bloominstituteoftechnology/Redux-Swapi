import React from 'react';
import {connect} from 'react-redux';

import {CharacterList} from '../components';
import {fetchChar} from '../actions/index.js';
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchCharAction();
  }

  render() {
    {
      console.log(this.props.fetching);
    }
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      <div> Loading...</div>;
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mstp = state => {
  return {
    fetching: state.fetching,
    characters: state.characters,
  };
};
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
//
export default connect(
  mstp,
  {fetchCharAction: fetchChar},
)(CharacterListView);
