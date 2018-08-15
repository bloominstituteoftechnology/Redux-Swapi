import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import '../styles/App.css';
import {getData} from '../actions'
// pull in actions from action/index

class App extends Component {
  componentDidMount() {
    // call our action
    console.log("CDM");
    this.props.getData();
  }
  render() {
    console.log(this.state)
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
  };
};

const mapStateToProps = state => {
  console.log(state);
  return {
    isFetching: state.charsReducer.isFetching,
    isFetched: state.charsReducer.isFetched,
    hasErrors: state.charsReducer.hasErrors,
    chars: state.charsReducer.chars,
    errors: state.charsReducer.errors
  };
};

// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
export default connect(
  mapStateToProps,
  {getData}
)(App);
