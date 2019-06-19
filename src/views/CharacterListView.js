import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { CharacterList } from '../components';
import { getData } from '../actions';

const CharacterListView = props => {
  useEffect(() => {
    props.getData();
  }, []);

  if (props.fetching) {
    return <h2>Loading yo...</h2>;
  }
  return (
    <div className='CharactersList_wrapper'>
      <CharacterList characters={props.characters} />
    </div>
  );
};

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
