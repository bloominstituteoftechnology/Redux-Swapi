import React, { Component } from "react";
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";

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
// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({ asyncAction: asyncAction }, dispatch);
// };

// the chars and the fetching boolean
const mapStateToProps = state => {
  return {
    // our state machine is working for us based on fetching, success, and error. lets make sure our component knows about the state machine
    chars: state.charsReducer.chars,
    error: state.charsReducer.error,
    fetching: state.charsReducer.fetchingChars // pending state, the fetching spinner or loading message etc. for when we're fetching!
  };
};

/* actions go here */
export default connect(mapStateToProps, { asyncAction })(App);
