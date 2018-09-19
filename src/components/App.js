import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import '../styles/App.css';
// pull in actions from action/index
import { fetchPeople } from '../actions'

class App extends Component {
  componentDidMount() {
    // call our action
  }

  render() {
    console.log(this.props.chars)
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
  console.log(state)
  return {
    chars: this.state.charsReducer.chars,
    error: state.charsReducer.error,
    fetchingPeople: state.charsReducer.fetchingPeople
  }
}

// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
export default connect(mapStateToProps, { fetchPeople })(App);
