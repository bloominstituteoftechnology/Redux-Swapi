import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import '../styles/App.css';
import { fetchChars } from '../actions';
// pull in actions from action/index

class App extends Component {
  componentDidMount() {
    // call our action
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

// our mapDispatchToProps needs to have two properties inherited from state

const mapStateToProps = state => {
  return {
    chars: this.starWars.chars,
    error: this.starWars.error,
    fetching: this.starWars.fetching,
    fetched: this.starWars.fetched
  };
}
// the chars and the fetching boolean
export default connect(null, { 
  fetchChars
  /* actions go here */
})(App);
