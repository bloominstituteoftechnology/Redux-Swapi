import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import '../styles/App.css';
// pull in actions from action/index
import { fetchChar } from '../actions'

class App extends Component {
  componentDidMount() {
    // call our action
    this.props.fetchChar();
  }

  render() {
    return (
      <div className="App">
        {this.props.fetchingChar ? (
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
const mapStateToProps = state => {
  console.log(state);
  return {
    chars: state.charsReducer.chars,
    fetchingChar: state.charsReducer.fetchingChar
    
  };
};

export default connect(mapStateToProps, {
  /* actions go here */
  fetchChar
})(App);
