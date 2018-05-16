import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import '../styles/App.css';

// pull in actions from action/index
import { fetchCharacters } from '../actions';

class App extends Component {
  componentDidMount() {
    this.props.fetchCharacters(); // call our action
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

const mapDispatchToProps = state => {
  return {
    chars: state.charsReducer.characters,
    fetching: state.charsReducer.fetching
  }
};

export default connect(mapDispatchToProps, { fetchCharacters })(App);
