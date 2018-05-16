import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import '../styles/App.css';
import { FETCH_AVENGERS, FETCHING_AVENGERS } from '../actions'
import {fetchAvengers} from '../actions'
// pull in actions from action/index

class App extends Component {
  componentDidMount() {
    this.props.fetchAvengers();
  }
  render() {
    return (
      <div className="App">
        {this.props.fetching ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <ul>
            {this.props.avengers.map(char => {
              {console.log('achar',char.results)}
              return <li key={char.results.map (item => item.name)}>{char.results.map (item => item.name)} </li>;
              
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
  console.log(state);
  return {
    avengers: state.avengers,
    fetching: state.fetching
  };
};

export default connect(mapStateToProps, {
  fetchAvengers 
})(App);
