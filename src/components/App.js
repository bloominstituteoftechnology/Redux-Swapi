import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetching } from '../actions';

import logo from '../logo.svg';
import '../styles/App.css';
// pull in actions from action/index

class App extends Component {
  componentDidMount() {
    this.props.fetching();
  }
  render() {
    return (
      <div className="App">
        {this.props.fetching ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <ul>
            {this.props.charsArr.map(char => {
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
  return {
    charsArr: state.charsArr,
    fetching: state.fetching,
  };
};

export default connect(mapStateToProps, { fetching })(App);
