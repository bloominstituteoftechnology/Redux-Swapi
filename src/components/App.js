import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import '../styles/App.css';
import { getCharacters } from "../actions/index.js"
// pull in actions from action/index

class App extends Component {
  componentDidMount() {
    this.props.getCharacters();
  }
  render() {
    return (
      <div className="App" chars={this.props.chars}>
        {this.props.fetching ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <ul chars={this.props.chars}>
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
  return {
    chars: state.charsReducer.chars,
    fetching: state.charsReducer.fetching
  }
}
// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
export default connect(mapStateToProps, { getCharacters })(App);
