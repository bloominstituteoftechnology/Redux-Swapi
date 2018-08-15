import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import '../styles/App.css';
// pull in actions from action/index
import { characterFetch } from "../actions/index";

class App extends Component {
  componentDidMount() {
    // call our action
    this.props.characterFetch();
  }
  render() {
    console.log(this.props)
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

const mapStateToProps = state => {
  console.log(state.charsReducer.chars);
  return {
    fetched: state.charsReducer.fetched,
    chars: state.charsReducer.chars,
  };
};

// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
export default connect( mapStateToProps, {
  characterFetch
})(App);
