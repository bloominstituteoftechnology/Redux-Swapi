import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import '../styles/App.css';
// pull in actions from action/index
import { fetchSwapi } from '../actions';

class App extends Component {
  componentDidMount() {
    // call our action
    this.props.fetchSwapi();
  }
  render() {
    return (
      <div className="App">
        {this.props.fetching ? (
          <div className='loading-screen'>
            <img src={logo} className="App-logo" alt="logo" />
            <h3>Cracking a cold one with the bois...</h3>
          </div>
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
  console.log('this is the state:', state);
  return {
    chars: state.charsReducer.chars,
    fetchingStuff: state.charsReducer.fetching,
    error: state.charsReducer.error
  };
};


export default connect(mapStateToProps, {fetchSwapi})(App);
