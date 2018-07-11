import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import '../styles/App.css';
import { fetchChars } from '../actions/index.js';
import { getChars, getFetchingState } from '../reducers/index.js';
// pull in actions from action/index

class App extends Component {
  componentDidMount() {
    this.props.fetchChars();
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

function mapStateToProps(state) {
  return {
    chars: getChars(state),
    fetching: getFetchingState(state)
  }
};

// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
export default connect(mapStateToProps, {fetchChars})(App);
