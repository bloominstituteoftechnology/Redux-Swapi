import React, { Component } from "react";
import { connect } from "react-redux";

import "../styles/App.css";
// pull in actions from action/index
import { fetchChars } from "../actions";
class App extends Component {
  componentDidMount() {
    // call our action
    this.props.fetchChars();
  }

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">The FORCE is Strong in Redux</h1>
        </header>
        {this.props.fetching ? (
          <h3>Loading Characters...</h3>
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
  console.log(state);
  return {
    chars: state.chars,
    fetching: state.fetching
  };
};

export default connect(mapStateToProps, { fetchChars })(App);
// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
