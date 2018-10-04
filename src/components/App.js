import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../styles/App.css';
import { fetchingChars } from '../actions/index';

class App extends Component {
  componentDidMount() {
    this.props.fetchingChars('https://swapi.co/api/people');
  }
  render() {
    return (
      <div className="App">
        {this.props.fetching ? (
          <h1> Loading... </h1>
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
  return {
    fetching: state.fetching,
    fethced: state.fetched,
    chars: state.chars,
    errors: state.errors
  }
}

// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
export default connect(mapStateToProps, { fetchingChars })(App);
