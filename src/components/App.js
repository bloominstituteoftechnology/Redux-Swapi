import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import '../styles/App.css';
import { fetchData } from '../actions';
// pull in actions from action/index

class App extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      console.log(this.props.fetching),
      (
        <div className="App">
          {this.props.fetching ? (
            <img src={logo} className="App-logo" alt="logo" />
          ) : (
            <ul>
              {/* {this.props.chars.map((char) => {
              return <li key={char.name}>{char.name}</li>;
            })} */}
            </ul>
          )}
        </div>
      )
    );
  }
}

// our mapDispatchToProps needs to have two properties inherited from state
const mapStateToProps = (state) => {
  return {
    chars: state.chars,
    error: state.error,
    fetching: state.fetching,
  };
};

// the chars and the fetching boolean
export default connect(
  mapStateToProps,
  {
    fetchData,
  }
)(App);
