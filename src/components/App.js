import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../styles/App.css';
// pull in actions from action/index
import getChars from '../actions/index';

class App extends Component {
  componentDidMount() {
    // call our action
    this.props.getChars();
  }
  render() {
    return (
      <div className="App">
          <ul>
            {this.props.chars.map(char => {
              return <li key={char.name}>{char.name}</li>;
            })}
          </ul>
      </div>
    );
  }
}

// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
const mapStateToProps = state => {
  return {
    chars: state.charsReducer.chars,
    fetching: state.charsReducer.fetching,
    error: state.charsReducer.error
  };
};

export default connect(mapStateToProps, { getChars
  /* actions go here */
})(App);
