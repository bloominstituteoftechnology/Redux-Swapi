import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getChars} from '../actions/index'; //don't need index here because node reads the index by default

import logo from '../logo.svg';
import '../styles/App.css';
// pull in actions from action/index


class App extends Component {
  componentDidMount() {
    this.props.getChars();
    
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
// the chars and the fetching boolean

const mapStateToProps = state => {
  console.log("State: ", state);
  return {
    chars: state.chars.chars,
    fetching: state.chars.fetching,
    fetched: state.chars.fetched, 
    error: state.chars.error
  };
};


export default connect(mapStateToProps, {
    /* actions go here */
    getChars
  })(App);
