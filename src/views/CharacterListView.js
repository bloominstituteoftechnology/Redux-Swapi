import React from 'react';
import { connect } from 'react-redux';

import { CharacterList } from '../components';
// import actions
import { fetchData } from '../actions/index';

class CharacterListView extends React.Component {
  constructor(props) {
    super(props);
    this.props.fetchData();
  }

  componentDidMount() {
    // call our action
    console.log('mounted');
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return (
        <div>
          <p>Loading data...</p>
        </div>
      );
    } else {
      return (
        <div className="CharactersList_wrapper">
          <CharacterList characters={this.props.characters} />;
        </div>
      );
    }
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = state => {
  console.log('state: ', state);
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching
  };
};
export default connect(
  mapStateToProps,
  { fetchData }
)(CharacterListView);
