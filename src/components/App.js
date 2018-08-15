import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import '../styles/App.css';
// pull in actions from action/index
import {fetchChars} from '../actions';

class App extends Component {
  componentDidMount() {
    // call our action
    this.props.fetchChars();
  }
  render() {
    return (
      <div className="App">
        {this.props.error ? <h1>{this.props.error}</h1> : null}
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

const mapStateToProps = (state) => {
  return {
    chars: state.chars.chars,
    error: state.chars.error,
    fetching: state.chars.fetching,
    fetched: state.chars.fetched
  }
}

export default connect(mapStateToProps, {
  /* actions go here */
  fetchChars
})(App);
