import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTheData } from '../actions'

import logo from '../logo.svg';
import '../styles/App.css';
// pull in actions from action/index

class App extends Component {
  componentDidMount() {
    // call our action
  }
  render() {
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
  chars: state.charsReducer.chars,
  isFetching: state.charsReducer.isFetching,
  isFetched: state.charsReducer.isFetched,
  errors: state.charsReducer.erros
}
// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
const mapDispatchToProps = {
  getTheData
}
export default connect(null, {
  mapStateToProps, mapDispatchToProps
})(App);
