import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import '../styles/App.css';
import {action} from '../actions';
// pull in actions from action/index

class App extends Component {
  componentDidMount() {
    // call our action
    this.props.action()
  }
  render() {
     
    const chars = this.props.chars 
    return (
      <div className="App">
        {this.props.fetching ?  (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <ul>
            {chars.map((char, i) => {
              return <li key={i}>{char.name}</li>;
            })}
          </ul>
        )}
      </div>
    );
  }
}

// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean

const mapStateToProps = state => ({
  chars: state.charsReducer.chars,
  fetching: state.charsReducer.fetching,
  fetched: state.charsReducer.fetched,
  error: state.charsReducer.error,
})

export default connect(mapStateToProps, {
  action
})(App);
