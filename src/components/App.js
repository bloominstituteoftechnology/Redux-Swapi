import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import '../styles/App.css';
// pull in actions from action/index
import {getCharachters} from '../actions/index.js';

class App extends Component {
  componentDidMount() {
    // call our action
    this.props.getCharachters();
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

const mapStateToProps = state => {
  console.log(state);
  return{
    chars: state.charsReducer.charachters,
    fetching: state.charsReducer.fetchingCharachters,
    error: state.charsReducer.error,
  };

};


export default connect(mapStateToProps, {getCharachters})(App);
