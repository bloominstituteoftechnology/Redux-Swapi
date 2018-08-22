import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import '../styles/App.css';
// pull in actions from action/index
import {getCharacters} from '../actions/index'

class App extends Component {
  componentDidMount() {
    this.props.getCharacters()
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
// the chars and the fetching boolean
const mapStatetoProps = (tree) => {

  return {
    chars: tree.banana.monkey
  }
}

export default connect(mapStatetoProps, {
  getCharacters
})(App);
