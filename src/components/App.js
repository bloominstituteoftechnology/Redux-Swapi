import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import '../styles/App.css';
// pull in actions from action/index
import { fetchChars } from '../actions/index';

class App extends Component {
  componentDidMount() {
    // call our action
    this.props.fetchChars();
  }
  render() {
    console.log("on app",this.props.chars)
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
// the chars and the fetching boolean
const mapStateToProps = state => {
  console.log("state on app",state)
  return {
    chars: state.charsReducer.chars,
    fetching: state.charsReducer.fetching,
  }
}
export default connect(mapStateToProps, {
  /* actions go here */
  fetchChars
})(App);
