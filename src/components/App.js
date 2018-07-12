import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import '../styles/App.css';
// pull in actions from action/index
import { fetchCharacters } from '../actions/index';

class App extends Component {
  componentDidMount() {
    // call our action
    this.props.fetchCharacters('https://swapi.co/api/people/');
  }

  render() {
    return (
      <div className="App">
        {this.props.fetching ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : 
          (
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
const mapStateToProps = (state) => {
  console.log(state);
  return ({
    fetching: state.chars.fetching,
    fetched: state.chars.fetched,
    error: state.chars.error,
    chars: state.chars.chars
  })};

// the chars and the fetching boolean
export default connect(mapStateToProps, {
  /* actions go here */
   fetchCharacters
})(App);