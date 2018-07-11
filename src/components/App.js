import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import '../styles/App.css';
// pull in actions from action/index
import {fetchingData} from '../actions/index';

class App extends Component {
  componentDidMount() {
    // call our action
    this.props.fetchingData();
  }
  render() {
    return (
      <div className="App">
        {this.props.fetching ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <ul>
            {this.props.chars.map(char => {
              return <p key={char.name}>{char.name}</p>;
            })}
          </ul>
        )}
      </div>
    );
  }
}

// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean

const mapDispatchToProps = state => {
  return {
  chars: state.chars,
  fetching: state.fetching
  };
}

export default connect(
  mapDispatchToProps, {
  fetchingData
})(App);
