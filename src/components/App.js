import React, { Component } from "react";
import { connect } from "react-redux";
import { getTheData } from "../actions";

import logo from "../logo.svg";
import "../styles/App.css";
// pull in actions from action/index

class App extends Component {
  componentDidMount() {
    // call our action
    this.props.getTheData();
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
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    chars: state.charsReducer.chars,
    isFetching: state.charsReducer.isFetching,
    isFetched: state.charsReducer.isFetched,
    errors: state.charsReducer.errors,
  };
};
// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
const mapDispatchToProps = {
  getTheData
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
