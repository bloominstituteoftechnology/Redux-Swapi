import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import '../styles/App.css';
import { getChars } from '../actions';

class App extends Component {
  componentDidMount() {
    this.props.getChars();
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

const mapDispatchToProps = (dispatch) => {
  return {
    chars: dispatch.charsReducer.chars,
    fetching: dispatch.charsReducer.fetching
  }
}

export default connect(mapDispatchToProps, {
  getChars
})(App);
