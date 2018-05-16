import React, { Component } from "react";
import { connect } from "react-redux";
import logo from "../logo.svg";
import "../styles/App.css";
// pull in actions from action/index
import { fetching_thing } from "../actions";
import { charsReducer } from "../reducers/starWarsReducer";

class App extends Component {
  componentDidMount() {
    // call our action
    this.props.fetching_thing();
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

// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean

const mapStateToProps = state => {
  const { charsReducer } = state;
  return charsReducer;
};

export default connect(mapStateToProps, {
  fetching_thing
  /* actions go here */
})(App);
