import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import '../styles/App.css';
// pull in actions from action/index
import {fetchCharacters} from '../actions'

class App extends Component {
  componentDidMount() {
    // call our action
    this.props.fetchCharacters()
  }
  render() {
    return (
      <div className="App">
        {this.props.fetching ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <ul>
            {this.props.chars.map(char => {
              return <li key={char.name}>{char.name}</li>;
            })}
          </ul>
        )}
      </div>
    );
  }
}

// our mapDispatchToProps needs to have two properties inherited from state
const mapDispatchToProps = state => {
  // the chars and the fetching boolean
  return {
    chars: state.charsReducer.chars,
    fetching: state.charsReducer.fetching
  }
}


export default connect(mapDispatchToProps, {
  fetchCharacters
})(App);
