import React, { Component } from 'react';
import { connect } from 'react-redux';


import logo from '../logo.svg';
import '../styles/App.css';
// pull in actions from action/index
import { fetchChars } from '../actions';

class App extends Component {
  componentDidMount() {
    this.props.fetchChars();

  }
  render() {
    return (
      <div className="App">
        <header>
          <h1>Star Wars Characters</h1>
        </header>
        {this.props.fetching ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
            <ul>
              {this.props.chars.map(char => {
                return <li key={char.name}>{char.name}</li>;
              })}
            </ul>
          )}
        {this.props.error !== "" ? <h4>{this.this.props.error}</h4> : null}
      </div>
    );
  }
}

// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean

const mapStatetoProps = state => {
  return {
    chars: state.chars,
    error: state.error,
    fetching: state.isFetching
  }
}

export default connect(mapStatetoProps, {
  fetchChars
})(App);
