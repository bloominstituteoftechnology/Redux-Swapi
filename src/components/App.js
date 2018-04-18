import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import '../styles/App.css';
import { getChars } from '../actions';
// pull in actions from action/index

class App extends Component {
  componentDidMount() {
    this.props.getChars();// call our action
  }
  render() {
    return (
      <div className="App">
      <h1> Star Wars Characters </h1>
        {this.props.fetching ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <div>
            {this.props.chars.map(char => {
              return <li key={char.name}>{char.name}</li>;
            })}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { 
    chars: state.chars, 
    fetching: state.fetching //boolean?
  };
};// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
export default connect(mapStateToProps, {getChars})(App);
  /* actions go here */

