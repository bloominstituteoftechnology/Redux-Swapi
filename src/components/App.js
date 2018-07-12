import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getChars } from '../actions/index';
import logo from '../logo.svg';
import '../styles/App.css';

class App extends Component {
  componentDidMount() {
    // call our actions
    this.props.getChars()
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

// our mapStateToProps needs to have two properties inherited from state
// the chars and the fetching boolean

const mapStateToProps = state => {
  return {
  chars: state.charsReducer.chars,
  fetching: state.charsReducer.fetching
  }
}

  /* actions go here */
export default connect(mapStateToProps, {
    getChars
})(App);
