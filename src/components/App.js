import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/App.css";
import logo from "../logo.svg";

// pull in actions from action/index
import { fetchCharData } from "../actions";
class App extends Component {
  componentDidMount() {
    // call our action
    this.props.fetchCharData();
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

// our mapDispatchToProps needs to have two properties inherited from state
const mapStateToProps = state => {
  return {
    chars: state.charsReducer.chars,
    isFetching: state.charsReducer.isFetching
  };
};
// the chars and the fetching boolean
export default connect(
  mapStateToProps,
  {
    fetchCharData
  }
)(App);
