import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/App.css";
// pull in actions from action/index
import { fetchCharData } from "../actions";
class App extends Component {
  componentDidMount() {
    // call our action
    console.log("COMPONENT DID MOUNT", this.props.fetchCharData);
    this.props.fetchCharData();
  }
  render() {
    return (
      <div className="App">
        {/* {this.props.fetching ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <ul>
            {this.props.chars.map(char => {
              return <li key={char.name}>{char.name}</li>;
            })}
          </ul>
        )} */}
        <p>Hey</p>
      </div>
    );
  }
}

// our mapDispatchToProps needs to have two properties inherited from state
const mapStateToProps = state => {
  console.log("MapsStatetoProps state CHARS", state.charsReducer.chars);
  console.log("MapsStatetoProps state FETCHED", state.charsReducer.isFetching);
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
