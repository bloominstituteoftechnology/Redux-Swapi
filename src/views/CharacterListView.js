import React from 'react';
import { connect } from 'react-redux';

import { CharacterList } from '../components';
// import actions
import { getData } from '../actions';

class CharacterListView extends React.Component {
  constructor(props) {
    super(props);
    console.log(props + ' Some props from.... CharLiVw');
  }

  componentDidMount() {
    // call our action
    this.props.getData();
  }

  render() {
    if (this.props.fetching) {
      return <h2>Loading yo...</h2>;
    }
    return (
      <div className='CharactersList_wrapper'>
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching,
    error: state.charsReducer.error
  };
};

// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  { getData }
)(CharacterListView);
