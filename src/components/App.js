import React, { Component } from 'react';
import { connect } from 'react-redux';


import logo from '../logo.svg';
import '../styles/App.css';
// pull in actions from action/index
import {getData} from '../actions/index'


class App extends Component {
  componentDidMount() {
      // call our action
      console.log("Component mounted.");
      this.props.getData();
  }
  render() {
    return (
      <div className="App">
        {this.props.isFetching ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <ul>
            {this.props.chars.map(char => {
              return <li key={char.name}>{char.name}</li>;
            })}
          </ul>
        )}
        {(this.props.isFetching) ?  (<div>{this.props.isFetching}Fetching data...</div>) : null}

      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    isFetching: state.charsReducer.isFetching,
    hasFetched: state.charsReducer.hasFetched,
    hasErrors: state.charsReducer.hasErrors,
    chars: state.charsReducer.chars,
    errors: state.charsReducer.errors
  };
};
// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
const mapDispatchToProps = {
  getData
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(App);