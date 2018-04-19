import React, { Component } from "react";
import { connect } from "react-redux";

import logo from "../logo.svg";
import "../styles/App.css";

import { fetchChars } from "../actions";

class App extends Component {
  componentDidMount() {
    this.props.fetchChars();
  }
  render() {
    return (
      <div className="App">
        {this.props.fetchingChars ? (
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
    chars: state.starWarsReducer.chars,
    fetchingChars: state.starWarsReducer.fetching
  };
};

export default connect(mapStateToProps, { fetchChars })(App);
