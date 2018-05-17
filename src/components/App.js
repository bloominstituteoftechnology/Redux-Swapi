import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import '../styles/App.css';
import { fetchSwapi } from '../actions/index';

class App extends Component {
  componentDidMount() {
    this.props.fetchSwapi();
  }
  render() {
    console.log(this.props)
    return (
      <div className="App">
        {this.props.fetching ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <ul>
            {this.props.chars.chars.map(char => {
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
const mapDispatchToProps = state => {
  console.log("state of charsReducer:", state.charsReducer);
  return {
    chars: state.charsReducer,
    fetching: state.fetching,
    error: state.error
  }
}
export default connect(mapDispatchToProps, { fetchSwapi })(App);
