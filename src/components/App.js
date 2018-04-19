import React, { Component } from "react";
import { connect } from "react-redux";

import logo from "../logo.svg";
import "../styles/App.css";
import { asyncAction } from "../actions";
// pull in actions from action/index

class App extends Component {
  componentDidMount() {
    this.props.asyncAction();
    // call our action
  }
  render() {
    return (
      <div className="App">
        {this.props.fetching ? (
          <img src={logo} className="App-logo" alt="logo" /> // logo spin while loading
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

// our mapDispatchToProps needs to have two properties inherited from state
const mapDispatchToProps = dispatch => {
  return 
}

// the chars and the fetching boolean
export default connect(null, {
  /* actions go here */
  mapDispatchToProps, 
})(App);
