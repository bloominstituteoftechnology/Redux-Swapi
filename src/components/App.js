import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import { connect } from 'react-redux';

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

const mapStateToProps = state => {
  return {
    chars: state.chars,
    fetching: state.fetching
  };
};
export default connect(mapStateToProps, { getChars })(App);