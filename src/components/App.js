import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import '../styles/App.css';
import { fetchChars } from '../actions';

class App extends Component {
  componentDidMount() {
    // call our action
    this.props.fetchChars();
  }

  render() {
    return (
      <div className="App">
        {this.props.fetching ? (
          <div>
            <img src={logo} className="App-logo" alt="logo" />
            <h2>fetching...</h2>
          </div>
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
    error: state.error,
    fetchingChar: state.fetchingChar
  }
}

// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
export default connect(mapStateToProps, {
  fetchChars
})(App);
