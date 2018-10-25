import React, { Component } from "react";
import { connect } from "react-redux";

import "../styles/App.css";
import { getCharacters } from "../actions/index";

class App extends Component {
  componentDidMount() {
    this.props.getCharacters();
  }
  render() {
    return (
      <div className="App">
        {this.props.gettingChars ? (
          <p>Getting characters...</p>
        ) : (
          <ul>
            {this.props.chars.map(char => {
              return <li key={char.name}>{char.name}</li>;
            })}
          </ul>
        )}
        {this.props.error !== "" ? <p>{this.props.error}</p> : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    chars: state.chars,
    error: state.error,
    gettingChars: state.gettingChars
  };
};

export default connect(
  mapStateToProps,
  { getCharacters }
)(App);
