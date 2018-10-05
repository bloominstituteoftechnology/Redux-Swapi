import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import '../styles/App.css';
// pull in actions from action/index
import { fetching, fetched } from '../actions/index';

class App extends Component {
  componentDidMount() {
    // call our action
    this.props.fetched()
  }
  render() {
    return (
      <div className="App">
        {this.props.fetching ? (
          <ul>
          {this.props.chars.map(char => {
            return <li key={char.name}>{char.name}</li>;
          })}
        </ul>
        ) : (
          <img src={logo} className="App-logo" alt="logo" />
          
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
  chars: state.charsReducer.chars,
  fetching: state.charsReducer.fetching
  }
}

// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean

export default connect(mapStateToProps, {
  /* actions go here */
  fetching,
  fetched
})(App);
