import React from 'react';
import {connect} from 'react-redux';

import {CharacterList} from '../components';
// import actions
import {fetchChars} from '../actions';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    //console.log('cdm');
    this.props.fetchChars();
  }

  render() {
    //console.log('CharacterListView');
    //console.log(this.props);
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return <h1>Loading</h1>;
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
  //console.log('mapState', state);
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching,
  };
};
export default connect(
  mapStateToProps,
  {
    fetchChars,
  },
)(CharacterListView);
