import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import '../styles/App.css';
// pull in actions from action/index
import { getChars } from '../actions';

class App extends Component {
  componentDidMount() {
    // call our action
    this.props.getChars();
  }
  render() {
    console.log("Before Render chars: ", this.props);
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
  console.log("state", state);
  return{
    chars: state.charsReducer.chars,
    fetching: state.charsReducer.fetching
  };
}

export default connect(mapStateToProps, {
  /* actions go here */
  getChars
})(App);
