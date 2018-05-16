import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import '../styles/App.css';
import { actionCreator } from '../actions';

class App extends Component {
  componentDidMount() {
    this.props.actionCreator();
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

const mapStateToProps = (state) => {
  console.log("Current state:", state);
  return {
    chars: state.charsReducer.chars,
    fetching: state.charsReducer.fetching,
    fetched: state.charsReducer.fetched,
    error: state.charsReducer.error
  }
}

export default connect(mapStateToProps, { actionCreator })(App);
