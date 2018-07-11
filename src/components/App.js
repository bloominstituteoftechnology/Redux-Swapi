import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchData } from '../actions';
import logo from '../logo.svg';
import '../styles/App.css';
// pull in actions from action/index

class App extends Component {
  componentDidMount() {
    // call our action
    this.props.fetchData();
  }
  render() {
    if (this.props.error) {
      return (
        <div>
          <h3>Oops! Something went wrong</h3>
          <p>{this.props.error}</p>
        </div>
      );
    }
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

const mapStateToProps = state => ({
  chars: state.chars.chars,
  fetching: state.chars.fetching,
  error: state.chars.error
});

// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
export default connect(
  mapStateToProps,
  {
    fetchData
  }
)(App);
