import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import '../styles/App.css';
import { getCharacters } from "../actions";


class App extends Component {
  componentDidMount() {
    this.props.getCharacters();
  }
  render() {
    console.log(this.props)
    return (
      <div className="App">
        {this.props.isFetching ? (
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
  console.log(this.props)
  return {
    chars: state.chars,
    isFetching: state.isFetching,
    hasErrors: state.hasErrors
  };
};
// the chars and the fetching boolean
export default connect(mapStateToProps, {
  getCharacters
})(App);
