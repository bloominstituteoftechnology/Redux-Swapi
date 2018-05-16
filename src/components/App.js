import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import '../styles/App.css';
// pull in actions from action/index
import { fetchCharacters } from '../actions'

class App extends Component {
  componentDidMount() {
    this.props.fetchCharacters()
    // call our action
  }
  render() {
    console.log('Props for App', this.props)
    return (
      <div className="App">
        {this.props.fetching ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <ul>
            {this.props.starwarsCharacters.map(char => {
              return <li key={char.name}>{char.name}</li>;
            })}
          </ul>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log('State', state)
  return {
    fetching: state.charsReducer.fetching,
    starwarsCharacters: state.charsReducer.starwarsCharacters,
  }
}
// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
export default connect(mapStateToProps, { fetchCharacters })(App);
